'use client';

import Image from 'next/image';
import { Button, ButtonTheme } from '../../components/Button/Button';
import styles from './Prompter.module.css';
import sendIcon from '../../../public/icons/send_icon.svg';
import { FormEventHandler, useEffect, useState } from 'react';
import { Config } from '../../../config/config';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { PredictionResponse } from '../../../types/predictionTypes';
import { useFingerprint } from '../../../hooks/useFingerprint';
import { getCardLink } from '../../../utils/getCardLink';
import { ItemType } from '../../../types/itemTypes';
import { TshirtColor } from '../../../constants/ItemColor';

const MAX_REQUESTS_NUMBERS = 10;

type Props = {
    withRemain?: boolean;
    value?: string;
};

export const Prompter = ({ value = '', withRemain = false }: Props) => {
    const [prompt, setPrompt] = useState(value || '');
    const [error, setError] = useState('');

    useEffect(() => {
        setPrompt(value);
    }, [value]);

    const fingerprintState = useFingerprint();

    const router = useRouter();
    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        setError('');
        axios
            .post<PredictionResponse>(`${Config.BACK_HOST}/query`, undefined, {
                params: {
                    prompt,
                    fingerprint: fingerprintState.value,
                },
            })
            .then((response) => {
                const id = response.data.id;
                router.push(
                    getCardLink(id, {
                        type: ItemType.Tshirt,
                        color: TshirtColor.White,
                    }),
                );
            })
            .catch((response: AxiosError) => {
                setError(response.response?.data as string);
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
                    autoComplete="off"
                />
                <Button
                    theme={ButtonTheme.BlackBackground}
                    left={
                        <Image
                            width={24}
                            height={24}
                            src={sendIcon}
                            alt="Отправить"
                        />
                    }
                    className={styles.sendButton}
                    type="submit"
                    disabled={fingerprintState.loading}
                >
                    Вжух
                </Button>
            </label>
            {error}
            {withRemain && (
                <div className={styles.remain}>
                    Осталось генераций: 10 из {MAX_REQUESTS_NUMBERS}
                </div>
            )}
        </form>
    );
};
