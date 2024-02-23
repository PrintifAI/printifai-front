import { useState } from 'react';
import { ItemColor } from '../../../constants/ItemColor';

import styles from './ColorPicker.module.css';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import classNames from 'classnames';

type Props = {
    color: ItemColor;
    setColor: (color: ItemColor) => void;
};

const COLORS_LENGTH = Object.keys(ItemColor).length;
const COLORS_PER_PAGE = 4;
const MAX_PAGES = Math.floor(COLORS_LENGTH / COLORS_PER_PAGE);

export const ColorPicker = ({ color, setColor }: Props) => {
    const [page, setPage] = useState(0);

    return (
        <div className={styles.colorPicker}>
            {page > 0 && (
                <LeftOutlined
                    onClick={() => {
                        setPage((page) => page - 1);
                    }}
                />
            )}
            {Object.entries(ItemColor)
                .slice(page * COLORS_PER_PAGE, (page + 1) * COLORS_PER_PAGE)
                .map(([key, value]) => (
                    <div
                        key={key}
                        className={classNames(
                            color === value ? styles.picked : undefined,
                            styles.colorEllipse,
                        )}
                        style={{
                            backgroundColor: value,
                        }}
                        onClick={() => {
                            setColor(value);
                        }}
                    ></div>
                ))}
            {page < MAX_PAGES && (
                <RightOutlined
                    onClick={() => {
                        setPage((page) => page + 1);
                    }}
                />
            )}
        </div>
    );
};
