'use client';

import styles from './Prompter.module.css';

export const Prompter = () => {
    const handleSend = () => {};

    return (
        <div className={styles.prompterContainer}>
            <input className={styles.prompterInput} />
            <button type="submit" onClick={handleSend}>
                Отправить
            </button>
        </div>
    );
};
