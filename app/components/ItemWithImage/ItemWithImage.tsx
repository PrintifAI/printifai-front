'use client';

import Image, { StaticImageData } from 'next/image';

import styles from './ItemWithImage.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import { Loader } from '../Loader/Loader';
import { ItemType } from '../../../types/itemTypes';

const IMAGE_WIDTH = 856;
const IMAGE_HEIGHT = 1208;

type Props = {
    imageSrc?: StaticImageData | string;
    loading?: boolean;
    itemSrc: StaticImageData;
    type: ItemType;
};

export const ItemWithImage = ({ imageSrc, itemSrc, loading }: Props) => {
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
                {!loading && imageSrc && (
                    <Image
                        width={IMAGE_WIDTH}
                        height={IMAGE_HEIGHT}
                        src={imageSrc}
                        alt="Наложенное изображение"
                        className={styles.overlappedImage}
                        priority={true}
                        style={{
                            height: '44%',
                            transform: 'translate(-50%, -65%)',
                        }}
                        draggable="false"
                    />
                )}
                {loading && <Loader />}

                <Image
                    src={itemSrc}
                    alt="Изображение футболки"
                    className={styles.itemImage}
                    priority={true}
                    draggable="false"
                    width={itemSrc.width}
                />
            </motion.div>
        </AnimatePresence>
    );
};
