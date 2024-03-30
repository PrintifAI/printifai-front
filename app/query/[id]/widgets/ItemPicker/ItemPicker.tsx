import { ItemWithImage } from '../../../../components/ItemWithImage/ItemWithImage';

import styles from './ItemPicker.module.css';
import {
    PredictionResponse,
    PredictionStatus,
} from '../../../../../types/predictionTypes';
import clsx from 'clsx';
import { ItemColor } from '../../../../../constants/ItemColor';
import { Button, ButtonTheme } from '../../../../components/Button/Button';
import { RightOutlined } from '@ant-design/icons';
import { getImageLink } from '../../../../../utils/getImageLink';
import { ItemType } from '../../../../../types/itemTypes';
import { ItemsMapping } from '../../../../../constants/itemMapping';
import { Magnifier } from '../../../../components/Magnifier/Magnifier';
import { ColorPicker } from '../../components/ColorPicker/ColorPicker';
import axios, { AxiosError } from 'axios';
import { Config } from '../../../../../config/config';
import { RemoveBackgroundResponse } from '../../../../../types/removeBackground';
import { useState } from 'react';

const ItemTypeMapping: Record<ItemType, string> = {
    [ItemType.Tshirt]: 'Футболка',
    [ItemType.Hoodie]: 'Худи',
    [ItemType.Shopper]: 'Шоппер',
};

const ALLOWED_ITEM_TYPES = [ItemType.Tshirt];

type Props = {
    prediction: PredictionResponse;
    type: ItemType;
    color: ItemColor;
    removedBackground: boolean;
    setColor: (color: ItemColor) => void;
    setType: (type: ItemType) => void;
    setRemovedBackground: (removedBackground: boolean) => void;
    onNext: () => void;
};

export const ItemPicker = ({
    prediction,
    color,
    type,
    setType,
    setColor,
    onNext,
    removedBackground,
    setRemovedBackground,
}: Props) => {
    const [removeLoading, setRemoveLoading] = useState(false);

    const loadingRemoveBackground =
        prediction?.removedBackground.some((item) => {
            return item.status === PredictionStatus.Created;
        }) || false;

    const handleRemoveBackground = () => {
        if (prediction.removedBackground.length) {
            setRemovedBackground(true);

            return;
        }

        setRemoveLoading(true);

        axios
            .post<RemoveBackgroundResponse>(
                `${Config.BACK_HOST}/remove-background`,
                undefined,
                {
                    params: {
                        predictionId: prediction.id,
                    },
                },
            )
            .then(() => {
                setRemovedBackground(true);
            })
            .catch((_: AxiosError) => {})
            .finally(() => {
                setRemoveLoading(false);
            });
    };

    return (
        <div className={styles.itemPicker}>
            <div className={styles.itemTypeMenu}>
                {Object.values(ItemType).map(
                    (value) =>
                        ALLOWED_ITEM_TYPES.includes(value) && (
                            <button
                                onClick={() => setType(value)}
                                key={value}
                                className={clsx(
                                    styles.itemType,
                                    type === value
                                        ? styles.itemTypePicked
                                        : undefined,
                                )}
                            >
                                {ItemTypeMapping[value]}
                            </button>
                        ),
                )}
            </div>

            <Magnifier>
                <div className={styles.itemWithImage}>
                    <ItemWithImage
                        loading={loadingRemoveBackground}
                        itemSrc={ItemsMapping[type][color].src}
                        imageSrc={getImageLink(
                            prediction.id,
                            removedBackground,
                        )}
                        type={ItemType.Tshirt}
                    />
                </div>
            </Magnifier>

            <ColorPicker
                color={color}
                onChange={(color) => setColor(color)}
                itemType={type}
            />

            <div className={styles.buttons}>
                <Button
                    theme={ButtonTheme.WhiteBackground}
                    onClick={() =>
                        removedBackground
                            ? setRemovedBackground(false)
                            : handleRemoveBackground()
                    }
                    loading={removeLoading}
                >
                    {removedBackground ? 'Вернуть фон' : 'Вырезать фон'}
                </Button>
                <Button onClick={onNext}>
                    <RightOutlined />
                </Button>
            </div>
        </div>
    );
};
