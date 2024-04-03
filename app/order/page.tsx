'use client';

import { FormEventHandler, useContext } from 'react';
import styles from './page.module.css';
import { Input } from '../components/Input/Input';
import { Button } from '../components/Button/Button';
import { CartContext } from '../../providers/CartProvider';
import { Price } from '../../constants/prices';
import dynamic from 'next/dynamic';

export default dynamic(
    () =>
        Promise.resolve(() => {
            const { cart } = useContext(CartContext);

            const handleSubmit: FormEventHandler = (e) => {
                e.preventDefault();
            };

            const sum = cart.reduce((prev, cur) => {
                return prev + cur.count * Price[cur.design.type];
            }, 299);

            return (
                <div className={styles.wrapper}>
                    <div className={styles.headText}>Оформление заказа</div>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.formRow}>
                            <Input placeholder="Город" />
                            <Input placeholder="Полный адрес" />
                        </div>
                        <div className={styles.formRow}>
                            <Input placeholder="Имя" />
                            <Input placeholder="Фамилия" />
                        </div>
                        <div className={styles.formRow}>
                            <Input placeholder="Email" />
                            <Input placeholder="Номер телефона" />
                        </div>
                        <div className={styles.formRow}>
                            <Input placeholder="Комментарий к заказу" />
                        </div>

                        <div className={styles.deliveryWay}>
                            <div>Способ доставки</div>
                            <label className={styles.deliveryWayRadio}>
                                <input
                                    type="radio"
                                    name="languages"
                                    value="post"
                                />
                                <div>Почтой России</div>
                                <div className={styles.wayPrice}>299 ₽</div>
                            </label>
                            <label className={styles.deliveryWayRadio}>
                                <input
                                    type="radio"
                                    name="languages"
                                    value="cdek"
                                />
                                <div>СДЭК</div>
                                <div className={styles.wayPrice}>299 ₽</div>
                            </label>
                        </div>

                        <div className={styles.sum}>Итого: {sum} ₽</div>
                        <div className={styles.finalButton}>
                            <Button type="submit">Оформить заказ</Button>
                        </div>
                    </form>
                </div>
            );
        }),
    { ssr: false },
);
