'use client';

import Image from 'next/image';
import { Button, ButtonTheme } from '../../components/Button/Button';
import styles from './Prompter.module.css';
import sendIcon from '../../../public/icons/send_icon.svg';
import { FormEventHandler, useState } from 'react';
import { Config } from '../../../config/config';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { PredictionResponse } from '../../../types/predictionTypes';

export const Prompter = () => {
    const [prompt, setPrompt] = useState('');
    const router = useRouter();
    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        axios
            .post<PredictionResponse>(`${Config.BACK_HOST}/query`, undefined, {
                params: {
                    prompt,
                },
                validateStatus: () => true,
            })
            .then((response) => {
                const id = response.data.id;
                router.replace(`/query/${id}`);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="prompt" className={styles.prompterContainer}>
                <input
                    name="prompt"
                    id="prompt"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className={styles.prompterInput}
                    placeholder="Космонавт верхом на радужном единороге"
                    required
                />
                <Button
                    theme={ButtonTheme.BlackBackground}
                    left={<Image width={45} src={sendIcon} alt="Отправить" />}
                    className={styles.sendButton}
                    type="submit"
                >
                    Вжух
                </Button>
            </label>
        </form>
    );
};
