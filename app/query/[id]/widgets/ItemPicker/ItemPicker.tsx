'use client';

import item from '../../../../../public/images/items/item1.png';
import { ItemWithImage } from '../../../../components/ItemWithImage/ItemWithImage';

import styles from './ItemPicker.module.css';
import { PredictionResponse } from '../../../../../types/predictionTypes';
import { Config } from '../../../../../config/config';
import { useState } from 'react';
import clsx from 'clsx';
import { ItemColor } from '../../../../../constants/ItemColor';
import { Button, ButtonTheme } from '../../../../components/Button/Button';
import { RightOutlined } from '@ant-design/icons';
import { History } from '../History/History';

export const getImageLink = (id: string) => {
    return `${Config.BACK_HOST}/query/${id}/image`;
};

type Props = {
    prediction: PredictionResponse;
};

export const ItemPicker = ({ prediction }: Props) => {
    const [color, setColor] = useState(ItemColor.White);

    return (
        <div className={styles.itemWithImage}>
            <div>
                <div>Футболка</div>
            </div>

            <ItemWithImage
                itemSrc={item}
                imageSrc={getImageLink(prediction.id)}
            />

            <div>
                {Object.entries(ItemColor).map(([key, value]) => (
                    <div
                        key={key}
                        className={clsx(
                            color === value ? styles.picked : undefined,
                            styles.colorEllipse,
                        )}
                        style={{
                            backgroundColor: value,
                        }}
                        onClick={() => {
                            setColor(value);
                        }}
                    />
                ))}
            </div>

            <div>
                <Button disabled theme={ButtonTheme.WhiteBackground}>
                    Вырезать фон
                </Button>
                <Button>
                    <RightOutlined />
                </Button>
            </div>

            <History />
        </div>
    );
};
