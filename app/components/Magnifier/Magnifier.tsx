import { ReactNode, useState } from 'react';

type Props = {
    children: ReactNode;
    magnifierHeight?: number;
    magnifierWidth?: number;
    zoomLevel?: number;
};
export const Magnifier = ({
    children,
    magnifierHeight = 200,
    magnifierWidth = 200,
    zoomLevel = 2,
}: Props) => {
    const [showMagnifier, setShowMagnifier] = useState(false);
    const [[x, y], setXY] = useState([0, 0]);

    return (
        <div style={{ position: 'relative' }}>
            <div
                onMouseEnter={(e) => {
                    setShowMagnifier(true);
                }}
                onMouseLeave={() => {
                    setShowMagnifier(false);
                }}
                onMouseMove={(e) => {
                    // update cursor position
                    const elem = e.currentTarget;
                    const { top, left } = elem.getBoundingClientRect();

                    // calculate cursor position on the image
                    const x = e.pageX - left - window.pageXOffset;
                    const y = e.pageY - top - window.pageYOffset;
                    setXY([x, y]);
                }}
            >
                {children}
            </div>
            <div
                style={{
                    display: showMagnifier ? '' : 'none',
                    position: 'absolute',

                    // prevent magnifier blocks the mousemove event of img
                    pointerEvents: 'none',
                    // set size of magnifier
                    height: `${magnifierHeight}px`,
                    width: `${magnifierWidth}px`,
                    // move element center to cursor pos
                    top: `${y - magnifierHeight / 2}px`,
                    left: `${x - magnifierWidth / 2}px`,
                    border: '1px solid lightgray', // show the border of magnifier
                    zIndex: 150,
                    overflow: 'hidden',
                    background: 'white',
                }}
            >
                <div
                    style={{
                        transform: `scale(${zoomLevel})`,
                        position: 'relative',
                        top: `${-y * zoomLevel + magnifierHeight}px`,
                        left: `${-x * zoomLevel + magnifierWidth}px`,
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};
