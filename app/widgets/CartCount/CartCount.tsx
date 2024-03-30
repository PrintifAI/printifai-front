'use client';

import { useContext } from 'react';
import styles from './CartCount.module.css';
import { CartContext } from '../../../providers/CartProvider';

export const CartCount = () => {
    const { cart } = useContext(CartContext);

    return (
        <>
            {cart && cart.length > 0 && (
                <div className={styles.count}>{cart.length}</div>
            )}
        </>
    );
};
