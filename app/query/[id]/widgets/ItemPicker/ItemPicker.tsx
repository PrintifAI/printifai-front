import { ItemWithImage } from '../../../../components/ItemWithImage/ItemWithImage';

import styles from './ItemPicker.module.css';
import { PredictionResponse } from '../../../../../types/predictionTypes';
import clsx from 'clsx';
import { ItemColor } from '../../../../../constants/ItemColor';
import { Button, ButtonTheme } from '../../../../components/Button/Button';
import { RightOutlined } from '@ant-design/icons';
import { getImageLink } from '../../../../../utils/getImageLink';
import { ItemType } from '../../../../../types/itemTypes';
import { ItemsMapping } from '../../../../../constants/itemMapping';
import { Tooltip } from 'react-tooltip';
import { Magnifier } from '../../../../components/Magnifier/Magnifier';
import { ColorPicker } from '../../components/ColorPicker/ColorPicker';

const ItemTypeMapping: Record<ItemType, string> = {
    [ItemType.Tshirt]: 'Футболка',
    [ItemType.Hoodie]: 'Худи',
    [ItemType.Shopper]: 'Шоппер',
};

type Props = {
    prediction: PredictionResponse;
    type: ItemType;
    color: ItemColor;
    setColor: (color: ItemColor) => void;
    setType: (type: ItemType) => void;
    onNext: () => void;
};

export const ItemPicker = ({
    prediction,
    color,
    type,
    setType,
    setColor,
    onNext,
}: Props) => {
    return (
        <div className={styles.itemPicker}>
            <div className={styles.itemTypeMenu}>
                {Object.values(ItemType).map((value) => (
                    <button
                        onClick={() => setType(value)}
                        key={value}
                        className={clsx(
                            styles.itemType,
                            type === value ? styles.itemTypePicked : undefined,
                        )}
                    >
                        {ItemTypeMapping[value]}
                    </button>
                ))}
            </div>

            <Magnifier>
                <div className={styles.itemWithImage}>
                    <ItemWithImage
                        itemSrc={ItemsMapping[type][color].src}
                        imageSrc={getImageLink(prediction.id)}
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
