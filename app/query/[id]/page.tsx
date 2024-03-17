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
import { ItemColor, TshirtColor } from '../../../constants/ItemColor';
import { ItemType } from '../../../types/itemTypes';
import { ItemSizePick } from './widgets/ItemSizePick/ItemSizePick';
import { useSearchParams, usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { addQueryParamToPath } from '../../../utils/addQueryParamToPath';

const CHECK_INTERVAL = 1000;

type Params = {
    id: string;
};

type SearchParams = {
    color?: ItemColor;
    type?: ItemType;
};

export default function Prediction({
    params,
    searchParams,
}: {
    params: Params;
    searchParams: SearchParams;
}) {
    const id = params.id;
    const typeParam = searchParams.type;
    const colorParam = searchParams.color;

    const [secondPage, setSecondPage] = useState(false);
    const [color, setColor] = useState(colorParam || TshirtColor.White);
    const [type, setType] = useState(typeParam || ItemType.Tshirt);

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
        const interval = setInterval(() => {
            if (prediction?.status === PredictionStatus.Created) {
                refetch();
            }
        }, CHECK_INTERVAL);

        return () => {
            clearInterval(interval);
        };
    }, [refetch, prediction]);

    const router = useRouter();
    const query = useSearchParams();
    const pathname = usePathname();

    useEffect(() => {
        const url = addQueryParamToPath({
            pathname,
            query,
            params: {
                color,
                type: type,
            },
        });

        router.replace(url);
    }, [color, type, query, pathname, router]);

    if (secondPage && color && type) {
        return (
            <ItemSizePick
                prediction={prediction!}
                color={color}
                setColor={setColor}
                type={type}
                setSecondPage={(value) => setSecondPage(value)}
            />
        );
    }

    return (
        <div className={styles.wrapper}>
            <BackButton />
            <div className={styles.prompterContainer}>
                <Prompter value={prediction?.sourcePrompt} />
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
                <ItemPicker
                    prediction={prediction}
                    type={type || ItemType.Tshirt}
                    color={color}
                    setColor={setColor}
                    setType={setType}
                    onNext={() => setSecondPage(true)}
                />
            )}
        </div>
    );
}
