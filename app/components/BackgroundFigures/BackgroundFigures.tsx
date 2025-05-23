'use client';

import Image from 'next/image';

import { MotionValue, motion, useScroll, useTransform } from 'framer-motion';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

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
    const { scrollYProgress } = useScroll();
    const pathname = usePathname();

    const [dimension, setDimension] = useState({ height: 0 });

    useEffect(() => {
        const resize = () => {
            setDimension({
                height:
                    document.documentElement.getBoundingClientRect().height -
                    window.innerHeight,
            });
        };

        window.addEventListener('resize', resize);

        resize();

        return () => {
            window.removeEventListener('resize', resize);
        };
    }, [pathname]);

    const y = useParallax(scrollYProgress, dimension.height * 0.5);

    return (
        <motion.div style={{ y }} className={styles.figuresContainer}>
            <div className={clsx(styles.figure, styles.fig1)}>
                <Image src={fig1} alt="" draggable="false" />
            </div>
            <div className={clsx(styles.figure, styles.fig2)}>
                <Image src={fig2} alt="" draggable="false" />
            </div>
            <div className={clsx(styles.figure, styles.fig3)}>
                <Image src={fig3} alt="" draggable="false" />
            </div>
            <div className={clsx(styles.figure, styles.fig4)}>
                <Image src={fig4} alt="" draggable="false" />
            </div>
            <div className={clsx(styles.figure, styles.fig5)}>
                <Image src={fig5} alt="" draggable="false" />
            </div>
            <div className={clsx(styles.figure, styles.fig6)}>
                <Image src={fig6} alt="" draggable="false" />
            </div>
            <div className={clsx(styles.figure, styles.fig7)}>
                <Image src={fig7} alt="" draggable="false" />
            </div>
            <div className={clsx(styles.figure, styles.fig8)}>
                <Image src={fig8} alt="" draggable="false" />
            </div>
        </motion.div>
    );
};
