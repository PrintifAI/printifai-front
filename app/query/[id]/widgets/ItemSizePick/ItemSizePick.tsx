import { motion } from 'framer-motion';
import { ItemColor } from '../../../../../constants/ItemColor';
import { ItemTheme, ItemsMapping } from '../../../../../constants/itemMapping';
import { Price } from '../../../../../constants/prices';
import { ItemType } from '../../../../../types/itemTypes';
import { PredictionResponse } from '../../../../../types/predictionTypes';
import { getImageLink } from '../../../../../utils/getImageLink';
import { Accordeon } from '../../../../components/Accordeon/Accordeon';
import { Button, ButtonSize } from '../../../../components/Button/Button';
import { ItemWithImage } from '../../../../components/ItemWithImage/ItemWithImage';
import { BackButtonWithEvent } from '../../components/BackButtonWithEvent/BackButtonWithEvent';
import { ColorPicker } from '../../components/ColorPicker/ColorPicker';
import styles from './ItemSizePick.module.css';
import { numberWithSpaces } from '../../../../../utils/numbersWithSpaces';
import Select from 'react-select';
import { useState } from 'react';
import { InputNumber } from '../../../../components/InputNumber/InputNumber';

const options = [
    { value: 'xxs', label: 'XXS' },
    { value: 'xs', label: 'XS' },
    { value: 's', label: 'S' },
    { value: 'm', label: 'M' },
    { value: 'l', label: 'L' },
    { value: 'xl', label: 'XL' },
    { value: 'xxl', label: 'XXL' },
];

type Props = {
    prediction: PredictionResponse;
    color: ItemColor;
    setColor: (color: ItemColor) => void;
    type: ItemType;
    setSecondPage: (value: boolean) => void;
};

export const ItemSizePick = ({
    prediction,
    color,
    setColor,
    type,
    setSecondPage,
}: Props) => {
    const [size, setSize] = useState<{ value: string; label: string } | null>({
        value: 'xs',
        label: 'XS',
    });

    const [itemCount, setItemCount] = useState(1);

    return (
        <div className={styles.wrapper}>
            <BackButtonWithEvent onClick={() => setSecondPage(false)} />
            <div className={styles.gridWrapper}>
                <div>
                    <motion.div
                        className={styles.itemWithImage}
                        animate={{
                            backgroundColor:
                                ItemsMapping[type][color].theme ===
                                ItemTheme.Dark
                                    ? 'var(--grey-white, #EEE)'
                                    : 'var(--txt-black)',
                        }}
                    >
                        <ItemWithImage
                            itemSrc={ItemsMapping[type][color].src}
                            imageSrc={getImageLink(prediction.id)}
                            type={type}
                        />
                    </motion.div>
                    <div className={styles.accordeons}>
                        <Accordeon title="Как ухажвивать за вещью">
                            123
                        </Accordeon>
                        <Accordeon title="Как ухажвивать за вещью">
                            123
                        </Accordeon>
                        <Accordeon title="Как ухажвивать за вещью">
                            123
                        </Accordeon>
                    </div>
                </div>

                <div>
                    <div className={styles.headText}>
                        {prediction.sourcePrompt}
                    </div>
                    <ColorPicker
                        color={color}
                        onChange={setColor}
                        itemType={type}
                        align="flex-start"
                    />
                    <div>
                        <label htmlFor="size-select">Размер</label>
                        <Select
                            options={options}
                            id="size-select"
                            styles={{
                                control: (base) => ({
                                    ...base,
                                    border: 'none',
                                    borderRadius: 0,
                                    borderBottom:
                                        '1px solid var(--pink, #FF83C6)',
                                    boxShadow: 'none',
                                }),
                            }}
                            value={size}
                            onChange={(value) => setSize(value!)}
                        />
                    </div>
                    <div className={styles.price}>
                        {numberWithSpaces(Price[type])} ₽
                    </div>
                    <div className={styles.addToCardBlock}>
                        <InputNumber
                            value={itemCount}
                            onChange={setItemCount}
                        />
                        <Button size={ButtonSize.Large}>
                            Добавить в корзину
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
