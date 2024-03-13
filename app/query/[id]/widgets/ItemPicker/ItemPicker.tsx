import { ItemWithImage } from '../../../../components/ItemWithImage/ItemWithImage';

import styles from './ItemPicker.module.css';
import { PredictionResponse } from '../../../../../types/predictionTypes';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { TshirtColor } from '../../../../../constants/ItemColor';
import { Button, ButtonTheme } from '../../../../components/Button/Button';
import { RightOutlined } from '@ant-design/icons';
import { getImageLink } from '../../../../../utils/getImageLink';
import { Item, ItemType } from '../../../../../types/itemTypes';
import { itemsMapping } from '../../../../../constants/itemMapping';
import { Tooltip } from 'react-tooltip';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { addQueryParamToPath } from '../../../../../utils/addQueryParamToPath';

const ItemTypeMapping: Record<ItemType, string> = {
    [ItemType.Tshirt]: 'Футболка',
    [ItemType.Hoodie]: 'Худи',
    [ItemType.Shopper]: 'Шоппер',
};

type Props = {
    prediction: PredictionResponse;
    item: Item;
    onNext: () => void;
};

export const ItemPicker = ({ prediction, item, onNext }: Props) => {
    const [color, setColor] = useState(item.color);
    const [itemType, setItemType] = useState(item.type);

    const router = useRouter();
    const query = useSearchParams();
    const pathname = usePathname();

    useEffect(() => {
        const url = addQueryParamToPath({
            pathname,
            query,
            params: {
                color,
                type: itemType,
            },
        });

        router.replace(url);
    }, [color, itemType, query, pathname, router]);

    return (
        <div>
            <div>
                {Object.values(ItemType).map((value) => (
                    <div onClick={() => setItemType(value)} key={value}>
                        {ItemTypeMapping[value]}
                    </div>
                ))}
            </div>

            <div className={styles.itemWithImage}>
                <ItemWithImage
                    itemSrc={itemsMapping[itemType][color].src}
                    imageSrc={getImageLink(prediction.id)}
                    type={ItemType.Tshirt}
                />
            </div>

            <div>
                {Object.entries(TshirtColor).map(([key, value]) => (
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
                <Tooltip anchorSelect="#cut-background-button">
                    Функция в разработке
                </Tooltip>
                <Button
                    id="cut-background-button"
                    disabled
                    theme={ButtonTheme.WhiteBackground}
                >
                    Вырезать фон
                </Button>
                <Button onClick={onNext}>
                    <RightOutlined />
                </Button>
            </div>

            {/* <History /> */}
        </div>
    );
};
