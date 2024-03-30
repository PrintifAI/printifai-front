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
import { getCardLink } from '../../../utils/getCardLink';
import { ItemType } from '../../../types/itemTypes';
import { TshirtColor } from '../../../constants/ItemColor';
import { useQuery } from '@tanstack/react-query';
import { RemainResponse } from '../../../types/remain';

const MAX_REQUESTS_NUMBERS = 10;

type Props = {
    withRemain?: boolean;
    value?: string;
};

export const Prompter = ({ value = '', withRemain = false }: Props) => {
    const [prompt, setPrompt] = useState(value || '');
    const [error, setError] = useState('');

    const { data: remaining, refetch } = useQuery({
        queryKey: ['remaining'],
        queryFn: () =>
            axios
                .get<RemainResponse>(`${Config.BACK_HOST}/remaining`, {
                    params: {},
                })
                .then((res) => res.data),
        enabled: withRemain,
    });

    useEffect(() => {
        setPrompt(value);
    }, [value]);

    const router = useRouter();
    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        setError('');
        axios
            .post<PredictionResponse>(`${Config.BACK_HOST}/query`, undefined, {
                params: {
                    prompt,
                },
            })
            .then((response) => {
                refetch();
                const id = response.data.id;
                const link = getCardLink({
                    predictionId: id,
                    removedBackground: false,
                    type: ItemType.Tshirt,
                    color: TshirtColor.White,
                });
                router.push(link, { scroll: false });
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
                >
                    Вжух
                </Button>
            </label>
            {error}
            {withRemain && (
                <div className={styles.remain}>
                    Осталось генераций: {remaining} из {MAX_REQUESTS_NUMBERS}
                </div>
            )}
        </form>
    );
};
