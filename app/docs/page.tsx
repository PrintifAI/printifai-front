import { DownloadOutlined } from '@ant-design/icons';
import styles from './page.module.css';

export default function Docs() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.head}>Документы</div>
            <div className={styles.links}>
                <a
                    href="/docs/user_agreement.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Пользовательское соглашение <DownloadOutlined />
                </a>
                <a
                    href="/docs/personal_data_processing_policy.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Политика обработки персональных данных <DownloadOutlined />
                </a>
            </div>
        </div>
    );
}
