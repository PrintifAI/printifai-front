import { Prompter } from './widgets/Prompter/Prompter';
import { CatalogMini } from './widgets/CatalogMini/CatalogMini';

import styles from './page.module.css';
import { MainText } from './components/MainText/MainText';
import { BackgroundFigures } from './components/BackgroundFigures/BackgroundFigures';

export default function Main() {
    return (
        <>
            <BackgroundFigures />

            <MainText />
            <div className={styles.prompterContainer}>
                <Prompter />
            </div>

            <div className={styles.afterPromptText}>
                Вся мощь искусственного интеллекта для создания лучших вещей
            </div>
            <CatalogMini />
        </>
    );
}
