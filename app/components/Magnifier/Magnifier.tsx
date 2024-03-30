import { ReactNode, useState } from 'react';

type Props = {
    children: ReactNode;
    magnifierHeight?: number;
    magnifierWidth?: number;
    zoomLevel?: number;
};
export const Magnifier = ({
    children,
    magnifierHeight = 230,
    magnifierWidth = 230,
    zoomLevel = 2,
}: Props) => {
    const [showMagnifier, setShowMagnifier] = useState(false);
    const [[x, y], setXY] = useState([0, 0]);

    return (
        <div
            style={{ position: 'relative' }}
            onMouseLeave={() => {
                setShowMagnifier(false);
            }}
            onMouseMove={(e) => {
                // не onMouseEnter, потому что курсор может
                // оказаться на Лупе в момент загрузки компонента и Лупа не отобразится
                if (!showMagnifier) {
                    setShowMagnifier(true);
                }

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
            <div
                style={{
                    display: showMagnifier ? '' : 'none',
                    position: 'absolute',
                    pointerEvents: 'none',
                    height: `${magnifierHeight}px`,
                    width: `${magnifierWidth}px`,
                    // move element center to cursor pos
                    top: `${y - magnifierHeight / 2}px`,
                    left: `${x - magnifierWidth / 2}px`,
                    border: '1px solid lightgray',
                    zIndex: 150,
                    overflow: 'hidden',
                    background: 'white',
                }}
            >
                <div
                    style={{
                        transform: `scale(${zoomLevel})`,
                        position: 'relative',
                        top: `${-y * zoomLevel * 0.8 + magnifierHeight}px`,
                        left: `${-x * zoomLevel + magnifierWidth}px`,
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};
