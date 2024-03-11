'use client';

import { Prompter } from '../../widgets/Prompter/Prompter';

import { BackButton } from './components/BackButton/BackButton';

import styles from './page.module.css';

import { ItemStub } from './components/ItemStub/ItemStub';
import {
    PredictionResponse,
    PredictionStatus,
} from '../../../types/predictionTypes';
import { FailedPrediction } from './components/FailedPrediction/FailedPrediction';
import { ItemPicker } from './widgets/ItemPicker/ItemPicker';
import { useQuery } from '@tanstack/react-query';
import { Config } from '../../../config/config';
import axios from 'axios';
import { useEffect, useState } from 'react';

const CHECK_INTERVAL = 1000;

type Params = {
    id: string;
};

export default function Prediction({ params }: { params: Params }) {
    const id = params.id;

    const [prompt, setPrompt] = useState('');

    const { data: prediction, refetch } = useQuery({
        queryKey: ['prediction', id],
        queryFn: () =>
            axios
                .get<PredictionResponse>(`${Config.BACK_HOST}/query/${id}`, {
                    params: {},
                })
                .then((res) => res.data),
        enabled: !!id,
    });

    useEffect(() => {
        setPrompt(prediction?.sourcePrompt || '');
    }, [prediction]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (prediction?.status === PredictionStatus.Created) {
                refetch();
            }
        }, CHECK_INTERVAL);

        return () => {
            clearInterval(interval);
        };
    }, [refetch, prediction]);

    return (
        <div className={styles.wrapper}>
            <BackButton />
            <div className={styles.prompterContainer}>
                <Prompter value={prompt} onChange={setPrompt} />
                {/* <Prompter initial={prediction?.sourcePrompt} withRemain /> */}
            </div>

            {!prediction ||
                (prediction.status === PredictionStatus.Created && (
                    <ItemStub />
                ))}
            {prediction?.status === PredictionStatus.Failed && (
                <FailedPrediction />
            )}
            {prediction?.status === PredictionStatus.Ready && (
                <ItemPicker prediction={prediction} />
            )}
        </div>
    );
}
