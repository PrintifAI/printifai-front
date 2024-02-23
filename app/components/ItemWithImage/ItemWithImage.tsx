import Image, { StaticImageData } from 'next/image';

import styles from './ItemWithImage.module.css';

type Props = {
    imageSrc: StaticImageData;
    itemSrc: StaticImageData;
};

export const ItemWithImage = ({ imageSrc, itemSrc }: Props) => {
    return (
        <div className={styles.overlapContainer}>
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
        </div>
    );
};
