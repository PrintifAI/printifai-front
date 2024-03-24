import { BackgroundFigures } from '../components/BackgroundFigures/BackgroundFigures';
import styles from './page.module.css';
export default function Contacts() {
    return (
        <>
            <BackgroundFigures />

            <div className={styles.contactsText}>
                Telegram{' '}
                <a href="https://t.me/printifai"> https://t.me/printifai</a>
            </div>
            <div className={styles.contactsText}>
                Почта{' '}
                <a href="mailto:printifai@yandex.ru">printifai@yandex.ru</a>
            </div>
            <div className={styles.contactsText}>ИНН: 772605831826</div>
        </>
    );
}
