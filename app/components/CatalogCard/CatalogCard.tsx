'use client';

import styles from './CatalogCard.module.css';

import { useState } from 'react';
import { ItemColor } from '../../../constants/ItemColor';

import { Button, ButtonSize, ButtonTheme } from '../Button/Button';
import { ArrowRightOutlined } from '@ant-design/icons';
import { ColorPicker } from '../ColorPickerMini/ColorPickerMini';

import { getCardLink } from '../../../utils/getCardLink';
import Link from 'next/link';
import { Price } from '../../../constants/prices';
import { ItemsMapping } from '../../../constants/itemMapping';
import { ItemCard } from '../ItemCard/ItemCard';
import { Design } from '../../../types/designTypes';

type Props = {
    design: Design;
};

export const CatalogCard = ({ design }: Props) => {
    const [color, setColor] = useState<ItemColor>(design.color);

    const colors = Object.keys(ItemsMapping[design.type]) as ItemColor[];

    const link = getCardLink({
        color,
        predictionId: design.predictionId,
        type: design.type,
        removedBackground: design.removedBackground,
    });

    return (
        <div className={styles.container}>
            <Link href={link} className={styles.cardLink}>
                <ItemCard
                    type={design.type}
                    color={color}
                    removedBackground={false}
                    predictionId={design.predictionId}
                />
            </Link>
            <div className={styles.onHoverBlock}>
                <ColorPicker
                    setColor={setColor}
                    color={color}
                    colors={colors}
                />
                <div className={styles.price}>{Price[design.type]} ₽</div>
                <Link href={link}>
                    <Button
                        theme={ButtonTheme.WhiteBackground}
                        size={ButtonSize.Small}
                    >
                        <ArrowRightOutlined style={{ fontSize: '16px' }} />
                    </Button>
                </Link>
            </div>
        </div>
    );
};
