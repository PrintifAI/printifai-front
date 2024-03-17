import { ItemWithImage } from '../../../../components/ItemWithImage/ItemWithImage';

import styles from './ItemStub.module.css';
import { ItemType } from '../../../../../types/itemTypes';
import { ItemsMapping } from '../../../../../constants/itemMapping';
import { TshirtColor } from '../../../../../constants/ItemColor';

export const ItemStub = () => {
    return (
        <>
            <div className={styles.generating}>Генерируем изображение...</div>
            <div className={styles.itemWithImage}>
                <ItemWithImage
                    loading
                    type={ItemType.Tshirt}
                    itemSrc={
                        ItemsMapping[ItemType.Tshirt][TshirtColor.White].src
                    }
                />
            </div>
        </>
    );
};
