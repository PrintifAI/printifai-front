'use client';

import styles from './CatalogCard.module.css';
import { ItemWithImage } from '../ItemWithImage/ItemWithImage';

import { useState } from 'react';
import { ItemColor } from '../../../constants/ItemColor';

import { Button, ButtonSize, ButtonTheme } from '../Button/Button';
import { ArrowRightOutlined } from '@ant-design/icons';
import { ColorPicker } from '../ColorPickerMini/ColorPickerMini';

import { motion } from 'framer-motion';
import { getImageLink } from '../../../utils/getImageLink';
import { getCardLink } from '../../../utils/getCardLink';
import Link from 'next/link';
import { Item } from '../../../types/itemTypes';
import { Price } from '../../../constants/prices';
import { ItemTheme, ItemsMapping } from '../../../constants/itemMapping';

type Props = {
    item: Item;
    predictionId: string;
};

export const CatalogCard = ({ item, predictionId }: Props) => {
    const [color, setColor] = useState<ItemColor>(item.color);

    const colors = Object.keys(ItemsMapping[item.type]) as ItemColor[];

    return (
        <motion.div
            className={styles.container}
            animate={{
                backgroundColor:
                    ItemsMapping[item.type][color].theme === ItemTheme.Dark
                        ? 'var(--grey-white, #EEE)'
                        : 'var(--txt-black)',
            }}
        >
            <ItemWithImage
                imageSrc={getImageLink(predictionId)}
                itemSrc={ItemsMapping[item.type][color].src}
                type={item.type}
            />
            <div className={styles.onHoverBlock}>
                <ColorPicker
                    setColor={setColor}
                    color={color}
                    colors={colors}
                />
                <div className={styles.price}>{Price[item.type]} ₽</div>
                <Link
                    href={getCardLink(predictionId, {
                        ...item,
                        color,
                    })}
                >
                    <Button
                        theme={ButtonTheme.WhiteBackground}
                        size={ButtonSize.Small}
                    >
                        <ArrowRightOutlined style={{ fontSize: '16px' }} />
                    </Button>
                </Link>
            </div>
        </motion.div>
    );
};
