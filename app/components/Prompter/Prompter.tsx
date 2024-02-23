'use client';

import Image from 'next/image';
import { Button, ButtonTheme } from '../Button/Button';
import styles from './Prompter.module.css';
import sendIcon from '../../../public/icons/send_icon.svg';

export const Prompter = () => {
    const handleSend = () => {};

    return (
        <label htmlFor="prompt" className={styles.prompterContainer}>
            <input
                name="prompt"
                id="prompt"
                className={styles.prompterInput}
                placeholder="Космонавт верхом на радужном единороге"
            />
            <Button
                theme={ButtonTheme.BlackBackground}
                left={<Image width={45} src={sendIcon} alt="Отправить" />}
                onClick={handleSend}
                className={styles.sendButton}
            >
                Вжух
            </Button>
        </label>
    );
};
