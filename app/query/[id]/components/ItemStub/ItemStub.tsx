import { ItemWithImage } from '../../../../components/ItemWithImage/ItemWithImage';

import item from '../../../../../public/images/items/item1.png';
import image from '../../../../../public/images/example1.png';

import styles from './ItemStub.module.css';

export const ItemStub = () => {
    return (
        <>
            <div className={styles.generating}>Генерируем изображение...</div>
            <div className={styles.itemWithImage}>
                <ItemWithImage itemSrc={item} imageSrc={image} />
            </div>
        </>
    );
};
