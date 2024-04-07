'use client';

import axios from 'axios';
import { Config } from '../../config/config';
import { Order, OrderResponse } from '../../types/orderTypes';
import styles from './page.module.css';
import { useQuery } from '@tanstack/react-query';
import { CartCard } from '../cart/components/CartCard/CartCard';

type SearchParams = {
    token?: string;
};

export default function AdminPage({
    searchParams,
}: {
    searchParams: SearchParams;
}) {
    const { data: orders } = useQuery({
        queryKey: ['orders'],
        queryFn: () =>
            axios
                .get<OrderResponse[]>(`${Config.BACK_HOST}/order`, {
                    headers: {
                        Authorization: `Bearer ${searchParams.token}`,
                    },
                })
                .then((res) => res.data),
    });

    return (
        <div className={styles.wrapper}>
            <div className={styles.headText}>Панель администратора</div>

            <div className={styles.orders}>
                {orders?.map((order) => {
                    const data = JSON.parse(order.data) as Order;

                    return (
                        <div key={order.id} className={styles.order}>
                            <div>{data.city}</div>
                            <div>{data.address}</div>
                            <div>{data.name}</div>
                            <div>{data.surname}</div>
                            <div>{data.telegram}</div>
                            <div>{data.email}</div>
                            <div>{data.deliveryWay}</div>
                            <div>{data.comment}</div>
                            <div>{order.createdAt}</div>
                            {data.cart.map((cartItem, i) => (
                                <CartCard item={cartItem} key={i} />
                            ))}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
