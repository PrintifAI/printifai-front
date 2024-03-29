import { YoutubeOutlined, InstagramOutlined } from '@ant-design/icons';
import styles from './Footer.module.css';
import { TelegramIcon } from '../Icons/Telegram';

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContent}>
                <div>@Copyright PrintifAI 2024. Все права зарезервированы.</div>
                <div className={styles.icons}>
                    <a href="https://youtube.com" className={styles.icon}>
                        <YoutubeOutlined />
                    </a>
                    <a href="https://instagram.com" className={styles.icon}>
                        <InstagramOutlined />
                    </a>
                    <a href="https://t.me/printifai" className={styles.icon}>
                        <TelegramIcon />
                    </a>
                </div>
            </div>
        </div>
    );
};
