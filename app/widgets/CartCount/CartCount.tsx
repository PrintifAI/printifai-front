'use client';

import { useContext } from 'react';
import styles from './CartCount.module.css';
import { CartContext } from '../../../providers/CartProvider';
import dynamic from 'next/dynamic';

export const CartCountComponent = () => {
    const { cart } = useContext(CartContext);

    return (
        <>
            {cart && cart.length > 0 && (
                <div className={styles.count}>{cart.length}</div>
            )}
        </>
    );
};

export const CartCount = dynamic(() => Promise.resolve(CartCountComponent), {
    ssr: false,
});
