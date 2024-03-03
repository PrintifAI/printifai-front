import { BackgroundFigures } from '../components/BackgroundFigures/BackgroundFigures';
import styles from './page.module.css';
export default function Galery() {
    return (
        <>
            <BackgroundFigures />

            <div className={styles.inDevText}>Страница в разработке</div>
        </>
    );
}
