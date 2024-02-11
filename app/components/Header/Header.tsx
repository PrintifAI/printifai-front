import { StarOutlined } from '@ant-design/icons';
import styles from './Header.module.css';
import Link from 'next/link';

export const Header = () => {
    return (
        <header>
            <nav className={styles.nav}>
                <div className={styles.innerNav}>
                    <Link href="/">
                        <StarOutlined />
                        PrintifAI
                    </Link>
                    <div>
                        <Link href="/catalog" className={styles.link}>
                            Каталог
                        </Link>
                        <Link href="/how-it-works" className={styles.link}>
                            Как это работает?
                        </Link>
                        <Link href="/delivery" className={styles.link}>
                            Доставка
                        </Link>
                        <Link href="/faq" className={styles.link}>
                            FAQ
                        </Link>
                        <Link href="/contacts" className={styles.link}>
                            Контакты
                        </Link>
                    </div>
                    <div className={styles.cartButton}>Корзина</div>
                </div>
            </nav>
        </header>
    );
};
