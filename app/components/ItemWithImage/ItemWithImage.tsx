'use client';

import Image, { StaticImageData } from 'next/image';

import styles from './ItemWithImage.module.css';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
    imageSrc: StaticImageData | string;
    itemSrc: StaticImageData;
};

export const ItemWithImage = ({ imageSrc, itemSrc }: Props) => {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                className={styles.overlapContainer}
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 10 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{
                    duration: 0.2,
                }}
                key={`${itemSrc.src}`}
            >
                <Image
                    width={856}
                    height={1208}
                    src={imageSrc}
                    alt="Наложенное изображение"
                    className={styles.overlappedImage}
                    priority={true}
                />
                <Image
                    src={itemSrc}
                    alt="Изображение футболки"
                    className={styles.itemImage}
                    priority={true}
                />
            </motion.div>
        </AnimatePresence>
    );
};
