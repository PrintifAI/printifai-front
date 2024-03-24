'use client';

import styles from './CartCount.module.css';

export const CartCount = () => {
    return (
        <div className={styles.count} style={{ display: 'none' }}>
            1
        </div>
    );
};
