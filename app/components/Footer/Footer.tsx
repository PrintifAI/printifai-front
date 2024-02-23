import { YoutubeOutlined, InstagramOutlined } from '@ant-design/icons';
import styles from './Footer.module.css';
import { TelegramIcon } from '../Icons/Telegram';

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContent}>
                <div>@Copyright PrintifAI 2023. Все права зарезервированы.</div>
                <div className={styles.icons}>
                    <a href="youtube.com">
                        <YoutubeOutlined />
                    </a>
                    <a href="instagram.com">
                        <InstagramOutlined />
                    </a>
                    <a href="telegram.com">
                        <TelegramIcon />
                    </a>
                </div>
            </div>
        </div>
    );
};
