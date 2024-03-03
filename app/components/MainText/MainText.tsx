import styles from './MainText.module.css';

export const MainText = () => {
    return (
        <div className={styles.mainTextBlock}>
            <div>
                <span className={styles.rotatedWord}>Футболка</span> о которой
                вы <span className={styles.underline1}>мечтали</span>
            </div>
            <div>
                Просто <span className={styles.underline2}>попробуйте</span>
            </div>
        </div>
    );
};
