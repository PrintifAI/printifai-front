'use client';

import { numberWithSpaces } from '../../utils/numbersWithSpaces';
import { BackgroundFigures } from '../components/BackgroundFigures/BackgroundFigures';
import { Button } from '../components/Button/Button';
import { CartCard } from './components/CartCard/CartCard';

import styles from './page.module.css';

export default function Cart() {
    return (
        <>
            <BackgroundFigures />

            <div className={styles.wrapper}>
                <div className={styles.headText}>Корзина</div>

                <CartCard />
                <CartCard />
                <CartCard />

                <div>
                    <div>Сумма (без учета доставки)</div>
                    <div>{numberWithSpaces(19200)} ₽</div>
                </div>

                <div>
                    <Button>Перейти к оформлению</Button>
                </div>
            </div>
        </>
    );
}
