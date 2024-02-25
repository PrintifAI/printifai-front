'use client';

import Image from 'next/image';

import { MotionValue, motion, useScroll, useTransform } from 'framer-motion';
import clsx from 'clsx';
import { useRef } from 'react';

import styles from './BackgroundFigures.module.css';

import fig1 from '../../../public/figures/fig1.svg';
import fig2 from '../../../public/figures/fig2.svg';
import fig3 from '../../../public/figures/fig3.svg';
import fig4 from '../../../public/figures/fig4.svg';
import fig5 from '../../../public/figures/fig5.svg';
import fig6 from '../../../public/figures/fig6.svg';
import fig7 from '../../../public/figures/fig7.svg';
import fig8 from '../../../public/figures/fig8.svg';

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [0, distance]);
}

export const BackgroundFigures = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });

    const y = useParallax(scrollYProgress, 150);

    return (
        <div className={styles.figuresContainer} ref={ref}>
            <motion.div
                style={{ y }}
                className={clsx(styles.figure, styles.fig1)}
            >
                <Image src={fig1} alt="" />
            </motion.div>
            <motion.div
                style={{ y }}
                className={clsx(styles.figure, styles.fig2)}
            >
                <Image src={fig2} alt="" />
            </motion.div>
            <motion.div
                style={{ y }}
                className={clsx(styles.figure, styles.fig3)}
            >
                <Image src={fig3} alt="" />
            </motion.div>
            <motion.div
                style={{ y }}
                className={clsx(styles.figure, styles.fig4)}
            >
                <Image src={fig4} alt="" />
            </motion.div>
            <motion.div
                style={{ y }}
                className={clsx(styles.figure, styles.fig5)}
            >
                <Image src={fig5} alt="" />
            </motion.div>
            <motion.div
                style={{ y }}
                className={clsx(styles.figure, styles.fig6)}
            >
                <Image src={fig6} alt="" />
            </motion.div>
            <motion.div
                style={{ y }}
                className={clsx(styles.figure, styles.fig7)}
            >
                <Image src={fig7} alt="" />
            </motion.div>
            <motion.div
                style={{ y }}
                className={clsx(styles.figure, styles.fig8)}
            >
                <Image src={fig8} alt="" />
            </motion.div>
        </div>
    );
};
