'use client';

import { StaticImageData } from 'next/image';
import styles from './CatalogCard.module.css';
import { ItemWithImage } from '../ItemWithImage/ItemWithImage';

import { useState } from 'react';
import { ItemColor } from '../../../constants/ItemColor';

import { Button, ButtonSize, ButtonTheme } from '../Button/Button';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { ColorPicker } from '../ColorPicker/ColorPicker';

import item1 from '../../../public/images/items/item1.png';
import item2 from '../../../public/images/items/item2.png';

type Props = {
    src: StaticImageData;
    price: number;
};

const colorImageMapping: Record<ItemColor, StaticImageData> = {
    [ItemColor.White]: item1,
    [ItemColor.Black]: item2,
    [ItemColor.Red]: item1,
    [ItemColor.LightBlue]: item1,
    [ItemColor.Blue]: item1,
    [ItemColor.Pink]: item1,
    [ItemColor.Purple]: item1,
};

export const CatalogCard = ({ src, price }: Props) => {
    const [color, setColor] = useState<ItemColor>(ItemColor.White);

    return (
        <div className={styles.container}>
            <ItemWithImage imageSrc={src} itemSrc={colorImageMapping[color]} />
            <div className={styles.onHoverBlock}>
                <ColorPicker setColor={setColor} color={color} />
                <div className={styles.price}>{price} ₽</div>
                <Button
                    theme={ButtonTheme.WhiteBackground}
                    size={ButtonSize.Small}
                >
                    <ShoppingCartOutlined style={{ fontSize: '16px' }} />
                </Button>
            </div>
        </div>
    );
};
