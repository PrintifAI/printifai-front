import Image, { StaticImageData } from 'next/image';

import styles from './ItemWithImage.module.css';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
    imageSrc: StaticImageData;
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
                key={`${itemSrc.src}${imageSrc.src}`}
            >
                <Image
                    src={imageSrc}
                    alt="Наложенное изображение"
                    className={styles.overlappedImage}
                />
                <Image
                    src={itemSrc}
                    alt="Изображение футболки"
                    className={styles.itemImage}
                />
            </motion.div>
        </AnimatePresence>
    );
};
