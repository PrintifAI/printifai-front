'use client';

import styles from './page.module.css';

type Params = {
    id: string;
};

export default function StatusPage({ params }: { params: Params }) {
    const id = params.id;

    return (
        <div className={styles.wrapper}>
            <div className={styles.headText}>Статус заказа {id}</div>
        </div>
    );
}
