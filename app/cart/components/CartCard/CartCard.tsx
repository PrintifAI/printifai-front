import { useState } from 'react';
import { InputNumber } from '../../../components/InputNumber/InputNumber';

import styles from './CartCard.module.css';
import { numberWithSpaces } from '../../../../utils/numbersWithSpaces';

export const CartCard = () => {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.card}>
            <div></div>
            <div></div>
            <div>
                <InputNumber value={count} onChange={setCount} />
            </div>
            <div>{numberWithSpaces(1999)} ₽</div>
        </div>
    );
};
