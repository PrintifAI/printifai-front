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
import { ItemWithImage } from '../../components/ItemWithImage/ItemWithImage';
import { getImageLink } from '../../../utils/getImageLink';
import { itemsMapping } from '../../../constants/itemMapping';
import { Accordeon } from '../../components/Accordeon/Accordeon';
import { Price } from '../../../constants/prices';
import { Button } from '../../components/Button/Button';

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
    const type = searchParams.type;
    const color = searchParams.color;

    const [secondPage, setSecondPage] = useState(false);

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

    if (secondPage && color && type) {
        return (
            <div className={styles.wrapper}>
                <div>
                    <div className={styles.itemWithImage}>
                        <ItemWithImage
                            itemSrc={itemsMapping[type][color].src}
                            imageSrc={getImageLink(id)}
                            type={type}
                        />
                    </div>
                    <div>
                        <Accordeon>123</Accordeon>
                        <Accordeon>123</Accordeon>
                        <Accordeon>123</Accordeon>
                    </div>
                </div>

                <div>
                    <div>{prediction?.sourcePrompt}</div>
                    <div>Размер</div>
                    <div>{Price[type]} Р</div>
                    <div>
                        <div>1</div>
                        <Button>Добавить в корзину</Button>
                    </div>
                </div>
            </div>
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
                    item={{
                        type: type || ItemType.Tshirt,
                        color: color || TshirtColor.White,
                    }}
                    onNext={() => setSecondPage(true)}
                />
            )}
        </div>
    );
}
