import { useState } from 'react';
import { ItemColor } from '../../../constants/ItemColor';

import styles from './ColorPickerMini.module.css';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

const COLORS_PER_PAGE = 4;

type Props = {
    color: ItemColor;
    setColor: (color: ItemColor) => void;
    colors: ItemColor[];
};

export const ColorPicker = ({ color, setColor, colors }: Props) => {
    const [page, setPage] = useState(0);

    return (
        <AnimatePresence mode="wait">
            <motion.div
                className={styles.colorPicker}
                key={page}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    duration: 0.2,
                }}
            >
                {page > 0 && (
                    <motion.div
                        key="back"
                        className={styles.iconDiv}
                        onClick={() => {
                            setPage((page) => page - 1);
                        }}
                    >
                        <LeftOutlined />
                    </motion.div>
                )}
                {colors
                    .slice(page * COLORS_PER_PAGE, (page + 1) * COLORS_PER_PAGE)
                    .map((i) => (
                        <motion.div
                            key={i}
                            className={clsx(
                                i === color ? styles.picked : undefined,
                                styles.colorEllipse,
                            )}
                            style={{
                                backgroundColor: i,
                            }}
                            onClick={() => {
                                setColor(i);
                            }}
                        ></motion.div>
                    ))}
                {page < Math.floor(colors.length / COLORS_PER_PAGE) && (
                    <motion.div
                        key="front"
                        className={styles.iconDiv}
                        onClick={() => {
                            setPage((page) => page + 1);
                        }}
                    >
                        <RightOutlined />
                    </motion.div>
                )}
            </motion.div>
        </AnimatePresence>
    );
};
