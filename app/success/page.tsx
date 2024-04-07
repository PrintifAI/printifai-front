import Link from 'next/link';
import { Button } from '../components/Button/Button';
import styles from './page.module.css';

export default function Success() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.head}>Ваш заказ успешно оформлен</div>
            <div>Скоро с вами свяжется администратор для оплаты</div>
            <Link href="/">
                <Button>На главную</Button>
            </Link>
        </div>
    );
}
