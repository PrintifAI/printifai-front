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
import { motion } from 'framer-motion';
import clsx from 'clsx';

type Props = {
    src: StaticImageData;
    price: number;
};

enum Theme {
    Dark = 'dark',
    Light = 'light',
}

const colorImageMapping: Record<
    ItemColor,
    { src: StaticImageData; theme: Theme }
> = {
    [ItemColor.White]: { src: item1, theme: Theme.Light },
    [ItemColor.Black]: { src: item2, theme: Theme.Dark },
    [ItemColor.Red]: { src: item1, theme: Theme.Light },
    [ItemColor.LightBlue]: { src: item1, theme: Theme.Light },
    [ItemColor.Blue]: { src: item1, theme: Theme.Dark },
    [ItemColor.Pink]: { src: item1, theme: Theme.Light },
    [ItemColor.Purple]: { src: item1, theme: Theme.Light },
};

export const CatalogCard = ({ src, price }: Props) => {
    const [color, setColor] = useState<ItemColor>(ItemColor.White);

    return (
        <motion.div
            className={clsx(styles.container)}
            animate={{
                backgroundColor:
                    colorImageMapping[color].theme === Theme.Dark
                        ? 'var(--grey-white, #EEE)'
                        : 'var(--txt-black)',
            }}
        >
            <ItemWithImage
                imageSrc={src}
                itemSrc={colorImageMapping[color].src}
            />
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
        </motion.div>
    );
};
