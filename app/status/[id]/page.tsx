'use client';

import styles from './page.module.css';
import { use } from 'react';

type Params = {
    id: string;
};

export default function StatusPage({ params }: { params: Promise<Params> }) {
    const { id } = use(params);

    return (
        <div className={styles.wrapper}>
            <div className={styles.headText}>Статус заказа {id}</div>
        </div>
    );
}
