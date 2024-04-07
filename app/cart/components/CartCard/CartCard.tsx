import { InputNumber } from '../../../components/InputNumber/InputNumber';

import styles from './CartCard.module.css';
import { numberWithSpaces } from '../../../../utils/numbersWithSpaces';
import { CartItem } from '../../../../types/cartTypes';
import { Price } from '../../../../constants/prices';
import { ColorMapping } from '../../../../constants/ItemColor';
import { ItemWithImage } from '../../../components/ItemWithImage/ItemWithImage';
import { ItemsMapping } from '../../../../constants/itemMapping';
import { getImageLink } from '../../../../utils/getImageLink';
import { CloseOutlined } from '@ant-design/icons';
import { getCardLink } from '../../../../utils/getCardLink';
import Link from 'next/link';

type Props = {
    item: CartItem;
    onChange?: (item: CartItem, newItem: CartItem | null) => void;
};

const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const CartCard = ({ item, onChange }: Props) => {
    const handleChangeCount = (count: number) => {
        onChange?.(item, {
            ...item,
            count: count,
        });
    };

    const handleRemoveItem = () => {
        onChange?.(item, null);
    };

    const link = getCardLink({
        color: item.design.color,
        prediction: item.design.prediction,
        type: item.design.type,
        removedBackground: item.design.removedBackground,
    });

    return (
        <div className={styles.card}>
            <Link href={link} className={styles.imageBlock}>
                <div className={styles.itemImage}>
                    <ItemWithImage
                        type={item.design.type}
                        itemSrc={
                            ItemsMapping[item.design.type][item.design.color]
                                .src
                        }
                        imageSrc={getImageLink(
                            item.design.prediction.id,
                            item.design.removedBackground,
                        )}
                    />
                </div>
                <div className={styles.descriptionBlock}>
                    <div className={styles.prompt}>
                        {capitalizeFirstLetter(
                            item.design.prediction.sourcePrompt,
                        )}
                    </div>
                    <div className={styles.lowerDescription}>
                        <div>Цвет: {ColorMapping[item.design.color]}</div>
                        <div>Размер: {item.size.toUpperCase()}</div>
                    </div>
                </div>
            </Link>
            {onChange ? (
                <div>
                    <InputNumber
                        value={item.count}
                        onChange={handleChangeCount}
                    />
                </div>
            ) : (
                <div>{item.count}</div>
            )}

            <div className={styles.price}>
                {numberWithSpaces(Price[item.design.type])} ₽
            </div>
            {onChange && (
                <button onClick={handleRemoveItem}>
                    <CloseOutlined />
                </button>
            )}
        </div>
    );
};
