import { Prompter } from './components/Prompter/Prompter';
import { CatalogMini } from './widgets/CatalogMini/CatalogMini';

import styles from './page.module.css';

export default function Main() {
    return (
        <>
            <div className={styles.mainTextBlock}>
                <div>
                    <span className={styles.rotatedWord}>Футболка</span> о
                    которой вы{' '}
                    <span className={styles.underline1}>мечтали</span>
                </div>
                <div>
                    Просто <span className={styles.underline2}>попробуйте</span>
                </div>
            </div>
            <Prompter />
            <div className={styles.afterPromptText}>
                Вся мощь искусственного интеллекта для создания лучших вещей
            </div>
            <CatalogMini />
        </>
    );
}
