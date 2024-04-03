'use client';

import { useContext } from 'react';
import { numberWithSpaces } from '../../utils/numbersWithSpaces';
import { Button, ButtonSize } from '../components/Button/Button';
import { CartCard } from './components/CartCard/CartCard';

import styles from './page.module.css';
import { CartContext } from '../../providers/CartProvider';
import dynamic from 'next/dynamic';
import { Price } from '../../constants/prices';
import { CartItem, equalCartItems } from '../../types/cartTypes';
import { equalDesign } from '../../types/designTypes';
import { nanoid } from 'nanoid';
import { MedicineBoxOutlined } from '@ant-design/icons';

export default dynamic(
    () =>
        Promise.resolve(() => {
            const { cart, setCart } = useContext(CartContext);

            const sum = cart.reduce((prev, val) => {
                return prev + Price[val.design.type] * val.count;
            }, 0);

            const handleChange = (item: CartItem, newItem: CartItem | null) => {
                let newCart = [...cart];

                const i = newCart.findIndex((cartItem) =>
                    equalCartItems(item, cartItem),
                );

                if (i === -1) {
                    if (!newItem) {
                        return;
                    }

                    newCart.push(newItem);
                } else {
                    if (!newItem) {
                        newCart.splice(i, 1);
                    } else {
                        newCart[i] = newItem;
                    }
                }

                setCart(newCart);
            };

            return (
                <div className={styles.wrapper}>
                    <div className={styles.headText}>Корзина</div>

                    {cart.length === 0 && (
                        <div className={styles.cartEmpty}>
                            <MedicineBoxOutlined
                                className={styles.cartEmptyIcon}
                            />
                            <div>Пусто</div>
                        </div>
                    )}

                    {cart.map((cartItem) => (
                        <CartCard
                            key={JSON.stringify({ ...cartItem, count: 0 })}
                            item={cartItem}
                            onChange={handleChange}
                        />
                    ))}

                    <div className={styles.sumBlock}>
                        <div className={styles.sumText}>
                            Сумма (без учета доставки)
                        </div>
                        <div className={styles.sum}>
                            {numberWithSpaces(sum)} ₽
                        </div>
                    </div>

                    <div className={styles.orderBlock}>
                        <Button
                            size={ButtonSize.Large}
                            disabled={cart.length === 0}
                        >
                            Перейти к оформлению
                        </Button>
                    </div>
                </div>
            );
        }),
    {
        ssr: false,
    },
);
