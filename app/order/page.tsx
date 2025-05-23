'use client';

import { FormEventHandler, useContext } from 'react';
import styles from './page.module.css';
import { Input } from '../components/Input/Input';
import { Button, ButtonSize } from '../components/Button/Button';
import { CartContext } from '../../providers/CartProvider';
import { Price } from '../../constants/prices';
import dynamic from 'next/dynamic';
import { Config } from '../../config/config';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default dynamic(
    () =>
        Promise.resolve(() => {
            const router = useRouter();
            const { cart, setCart } = useContext(CartContext);

            const handleSubmit: FormEventHandler = (e) => {
                e.preventDefault();
                const data = new FormData(e.target as any);
                const orderData = Object.fromEntries(data.entries());

                const order = {
                    ...orderData,
                    cart,
                };

                axios
                    .post(`${Config.BACK_HOST}/order`, {
                        data: JSON.stringify(order),
                    })
                    .then(() => {
                        router.push('/success');
                        setCart([]);
                    })
                    .catch();
            };

            const sum = cart.reduce((prev, cur) => {
                return prev + cur.count * Price[cur.design.type];
            }, 299);

            return (
                <div className={styles.wrapper}>
                    <div className={styles.headText}>Оформление заказа</div>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.formRow}>
                            <Input name="city" placeholder="Город" required />
                            <Input
                                name="address"
                                placeholder="Полный адрес"
                                required
                            />
                        </div>
                        <div className={styles.formRow}>
                            <Input name="name" placeholder="Имя" required />
                            <Input
                                name="surname"
                                placeholder="Фамилия"
                                required
                            />
                        </div>
                        <div className={styles.formRow}>
                            <Input name="email" placeholder="Email" required />
                            <Input
                                name="telegram"
                                placeholder="Телеграм"
                                required
                            />
                        </div>
                        <div className={styles.formRow}>
                            <Input
                                name="comment"
                                placeholder="Комментарий к заказу"
                            />
                        </div>

                        <div className={styles.deliveryWay}>
                            <div className={styles.deliveryWayHeader}>
                                Способ доставки
                            </div>
                            <label className={styles.deliveryWayRadio}>
                                <div className={styles.radioLeft}>
                                    <input
                                        type="radio"
                                        name="deliveryWay"
                                        value="post"
                                        className={styles.radio}
                                        defaultChecked
                                    />
                                    <div>Почтой России</div>
                                </div>
                                <div className={styles.wayPrice}>299 ₽</div>
                            </label>
                            <label className={styles.deliveryWayRadio}>
                                <div className={styles.radioLeft}>
                                    <input
                                        type="radio"
                                        name="deliveryWay"
                                        value="cdek"
                                        className={styles.radio}
                                    />
                                    <div>СДЭК</div>
                                </div>
                                <div className={styles.wayPrice}>299 ₽</div>
                            </label>
                        </div>

                        <div className={styles.sum}>Итого: {sum} ₽</div>
                        <div className={styles.finalButton}>
                            <Link className={styles.offer} href="docs">
                                Нажимая на кнопку оформить заказ,
                                 вы соглашаетесь с политикой обработки
                                персональных данных и пользовательским соглашением
                            </Link>
                            <Button type="submit" size={ButtonSize.Large}>
                                Оформить заказ
                            </Button>
                        </div>
                    </form>
                </div>
            );
        }),
    { ssr: false },
);
