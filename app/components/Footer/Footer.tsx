import styles from './Footer.module.css';
import { TelegramIcon } from '../Icons/Telegram';
import Link from 'next/link';

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContent}>
                <div>@Copyright PrintifAI 2024-2025. Все права зарезервированы.</div>
                <div className={styles.icons}>
                    <Link href="/docs" className={styles.link}>
                        Документы
                    </Link>
                    <a href="https://t.me/printifai" className={styles.icon}>
                        <TelegramIcon />
                    </a>
                </div>
            </div>
        </div>
    );
};
