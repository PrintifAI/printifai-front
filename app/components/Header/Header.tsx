import Image from 'next/image';

import styles from './Header.module.css';
import Link from 'next/link';

import logoIcon from '../../../public/icons/logo.svg';
import { Button, ButtonTheme } from '../Button/Button';
import { ShoppingCartOutlined } from '@ant-design/icons';

export const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link href="/" className={styles.logoLink}>
                    <Image src={logoIcon} alt="logo" />
                    PrintifAI
                </Link>
                <div className={styles.menuLinks}>
                    <Link href="/catalog" className={styles.menuLink}>
                        Каталог
                    </Link>
                    <Link href="/how-it-works" className={styles.menuLink}>
                        Как это работает?
                    </Link>
                    <Link href="/faq" className={styles.menuLink}>
                        FAQ
                    </Link>
                    <Link href="/contacts" className={styles.menuLink}>
                        Контакты
                    </Link>
                </div>
                <Button
                    left={<ShoppingCartOutlined style={{ fontSize: '24px' }} />}
                    theme={ButtonTheme.WhiteBackground}
                >
                    Корзина
                </Button>
            </nav>
        </header>
    );
};
