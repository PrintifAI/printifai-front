import { Prompter } from './components/Prompter/Prompter';
import { CatalogMini } from './widgets/CatalogMini/CatalogMini';

import styles from './page.module.css';
import { motion } from 'framer-motion';
import { MainText } from './components/MainText/MainText';

export default function Main() {
    return (
        <>
            <MainText />
            <Prompter />
            <div className={styles.afterPromptText}>
                Вся мощь искусственного интеллекта для создания лучших вещей
            </div>
            <CatalogMini />
        </>
    );
}
