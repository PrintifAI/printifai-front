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
import { ShoppingCartOutlined } from '@ant-design/icons';
import Link from 'next/link';

export default dynamic(
    () =>
        Promise.resolve(() => {
            const { cart, setCart } = useContext(CartContext);

            const sum = cart.reduce((prev, val) => {
                return prev + Price[val.design.type] * val.count;
            }, 0);

            const handleChange = (item: CartItem, newItem: CartItem | null) => {
                const newCart = [...cart];

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
                            <div className={styles.emptyOpacity}>
                                <ShoppingCartOutlined
                                    className={styles.cartEmptyIcon}
                                />
                                <div>Вы еще не добавили товары в корзину</div>
                            </div>
                            <Link href="/catalog">
                                <Button size={ButtonSize.Large}>
                                    В каталог
                                </Button>
                            </Link>
                        </div>
                    )}

                    {cart.length !== 0 && (
                        <>
                            {cart.map((cartItem) => (
                                <CartCard
                                    key={JSON.stringify({
                                        ...cartItem,
                                        count: 0,
                                    })}
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
                                <Link href="/order">
                                    <Button size={ButtonSize.Large}>
                                        Перейти к оформлению
                                    </Button>
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            );
        }),
    {
        ssr: false,
    },
);
