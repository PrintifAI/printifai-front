'use client';

import { motion } from 'framer-motion';

import styles from './MainText.module.css';

export const MainText = () => {
    return (
        <div className={styles.mainTextBlock}>
            <div>
                <motion.span
                    className={styles.rotatedWord}
                    animate={{
                        rotate: '-1.5deg',
                    }}
                >
                    Футболка
                </motion.span>{' '}
                о которой вы <span className={styles.underline1}>мечтали.</span>
            </div>
            <div>
                Просто <span className={styles.underline2}>попробуйте.</span>
            </div>
        </div>
    );
};
