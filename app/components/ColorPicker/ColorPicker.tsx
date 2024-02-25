import { useState } from 'react';
import { ItemColor } from '../../../constants/ItemColor';

import styles from './ColorPicker.module.css';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

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
                {Object.entries(ItemColor)
                    .slice(page * COLORS_PER_PAGE, (page + 1) * COLORS_PER_PAGE)
                    .map(([key, value]) => (
                        <motion.div
                            key={value}
                            className={clsx(
                                color === value ? styles.picked : undefined,
                                styles.colorEllipse,
                            )}
                            style={{
                                backgroundColor: value,
                            }}
                            onClick={() => {
                                setColor(value);
                            }}
                        ></motion.div>
                    ))}
                {page < MAX_PAGES && (
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
