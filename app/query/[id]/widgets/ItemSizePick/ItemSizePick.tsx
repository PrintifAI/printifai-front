import { ItemColor } from '../../../../../constants/ItemColor';
import { Price } from '../../../../../constants/prices';
import { ItemType } from '../../../../../types/itemTypes';
import { PredictionResponse } from '../../../../../types/predictionTypes';
import { Accordion } from '../../../../components/Accordion/Accordion';
import {
    Button,
    ButtonSize,
    ButtonTheme,
} from '../../../../components/Button/Button';
import { BackButtonWithEvent } from '../../components/BackButtonWithEvent/BackButtonWithEvent';
import { ColorPicker } from '../../components/ColorPicker/ColorPicker';
import { numberWithSpaces } from '../../../../../utils/numbersWithSpaces';
import { useContext, useState } from 'react';
import { InputNumber } from '../../../../components/InputNumber/InputNumber';
import { ItemCard } from '../../../../components/ItemCard/ItemCard';
import { ItemSize } from '../../../../../constants/ItemSize';
import { Select } from 'antd';
import { CartContext } from '../../../../../providers/CartProvider';

import styles from './ItemSizePick.module.css';
import Link from 'next/link';
import { Design, equalDesign } from '../../../../../types/designTypes';

const options = [
    { value: ItemSize.XXS, label: 'XXS' },
    { value: ItemSize.XS, label: 'XS' },
    { value: ItemSize.S, label: 'S' },
    { value: ItemSize.M, label: 'M' },
    { value: ItemSize.L, label: 'L' },
    { value: ItemSize.XL, label: 'XL' },
    { value: ItemSize.XXL, label: 'XXL' },
];

const AccordionsMapping = {
    [ItemType.Tshirt]: (
        <>
            <Accordion title="Таблица размеров">
                <table className={styles.accordionTable}>
                    <thead>
                        <tr>
                            <th>Размер</th>
                            <th>Обхват груди</th>
                            <th>Обхват талии</th>
                            <th>Длина</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>XXS</td>
                            <td>80-84 см</td>
                            <td>60-64 см</td>
                            <td>60 см</td>
                        </tr>
                        <tr>
                            <td>XS</td>
                            <td>84-88 см</td>
                            <td>64-68 см</td>
                            <td>62 см</td>
                        </tr>
                        <tr>
                            <td>S</td>
                            <td>88-92 см</td>
                            <td>68-72 см</td>
                            <td>64 см</td>
                        </tr>
                        <tr>
                            <td>M</td>
                            <td>92-96 см</td>
                            <td>72-76 см</td>
                            <td>66 см</td>
                        </tr>
                        <tr>
                            <td>L</td>
                            <td>96-100 см</td>
                            <td>76-80 см</td>
                            <td>68 см</td>
                        </tr>
                        <tr>
                            <td>XL</td>
                            <td>100-104 см</td>
                            <td>80-84 см</td>
                            <td>70 см</td>
                        </tr>
                        <tr>
                            <td>XXL</td>
                            <td>104-108 см</td>
                            <td>84-88 см</td>
                            <td>72 см</td>
                        </tr>
                    </tbody>
                </table>
            </Accordion>
            <Accordion title="Состав">
                Состав: хлопок 100 %. Принты наносятся методом цифровой печати.
            </Accordion>
            <Accordion title="Как ухаживать за вещью">
                — стирать в теплой воде (до 40 °С)
                <br />— гладить при средней температуре (до 100–150 °С)
                <br />— не отбеливать
                <br />— не подвергать химчистке.
            </Accordion>
        </>
    ),
    [ItemType.Hoodie]: (
        <>
            <Accordion title="Таблица размеров">123</Accordion>
            <Accordion title="Состав">
                Состав: хлопок 100 %. Принты наносятся методом цифровой печати.
            </Accordion>
            <Accordion title="Как ухаживать за вещью">123</Accordion>
        </>
    ),
    [ItemType.Shopper]: (
        <>
            <Accordion title="Таблица размеров">123</Accordion>
            <Accordion title="Состав">
                Состав: хлопок 100 %. Принты наносятся методом цифровой печати.
            </Accordion>
            <Accordion title="Как ухаживать за вещью">123</Accordion>
        </>
    ),
};

type Props = {
    prediction?: PredictionResponse;
    color: ItemColor;
    removedBackground: boolean;
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
    removedBackground,
}: Props) => {
    const cartContext = useContext(CartContext);

    const [size, setSize] = useState<ItemSize>(ItemSize.XS);

    const [itemCount, setItemCount] = useState(1);

    const design: Design | null = prediction
        ? {
              prediction: prediction,
              color,
              type,
              removedBackground,
          }
        : null;

    const handleAddToCart = () => {
        if (!prediction?.id) {
            return;
        }

        const cart = [...cartContext.cart];

        const i = cart.findIndex(
            (cartItem) =>
                equalDesign(cartItem.design, design!) && size === cartItem.size,
        );

        if (i !== -1) {
            return;
        }

        cart.push({
            design: design!,
            size,
            count: itemCount,
        });

        cartContext.setCart(cart);
    };

    return (
        <div className={styles.wrapper}>
            <BackButtonWithEvent onClick={() => setSecondPage(false)} />
            <div className={styles.gridWrapper}>
                <div>
                    <div className={styles.itemCard}>
                        <ItemCard
                            type={type}
                            color={color}
                            removedBackground={removedBackground}
                            predictionId={prediction?.id!}
                            loading={!prediction}
                        />
                    </div>
                    <div className={styles.accordions}>
                        {AccordionsMapping[type]}
                    </div>
                </div>

                <div>
                    <div className={styles.headText}>
                        {prediction?.sourcePrompt}
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
                            variant="borderless"
                            size="large"
                            style={{
                                border: 'none',
                                borderRadius: 0,
                                borderBottom: '1px solid var(--pink, #FF83C6)',
                                boxShadow: 'none',
                                width: '100%',
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
                        {cartContext.cart.some(
                            (cartItem) =>
                                equalDesign(cartItem.design, design) &&
                                size === cartItem.size,
                        ) ? (
                            <Link href="/cart">
                                <Button
                                    size={ButtonSize.Large}
                                    theme={ButtonTheme.WhiteBackground}
                                >
                                    Перейти в корзину
                                </Button>
                            </Link>
                        ) : (
                            <Button
                                size={ButtonSize.Large}
                                onClick={handleAddToCart}
                                disabled={!design}
                            >
                                Добавить в корзину
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
