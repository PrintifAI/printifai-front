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
import { getLocalStorage, setLocalStorage } from '../../../utils/localStorage';
import { LOCAL_STORAGE_HISTORY_KEY } from '../../../constants/LocalStorageKeys';
import { Design } from '../../../types/designTypes';
import { History } from './widgets/History/History';

const CHECK_INTERVAL = 1000;

type Params = {
    id: string;
};

type SearchParams = {
    color?: ItemColor;
    type?: ItemType;
    secondPage?: boolean;
    rmbg?: boolean;
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
    const secondPageParam = searchParams.secondPage;
    const removedBackgroundParam = !!searchParams.rmbg;

    const [secondPage, setSecondPage] = useState(secondPageParam || false);
    const [color, setColor] = useState(colorParam || TshirtColor.White);
    const [type, setType] = useState(typeParam || ItemType.Tshirt);
    const [removedBackground, setRemovedBackground] = useState<boolean>(
        removedBackgroundParam || false,
    );

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

    const loadingRemoveBackground =
        prediction?.removedBackground.some((item) => {
            return item.status === PredictionStatus.Created;
        }) || false;

    const readyRemoveBackground =
        prediction?.removedBackground.some((item) => {
            return item.status === PredictionStatus.Ready;
        }) || false;

    useEffect(() => {
        const interval = setInterval(() => {
            if (
                prediction?.status === PredictionStatus.Created ||
                loadingRemoveBackground
            ) {
                refetch();
            }
        }, CHECK_INTERVAL);

        return () => {
            clearInterval(interval);
        };
    }, [refetch, prediction, loadingRemoveBackground, removedBackground]);

    const router = useRouter();
    const query = useSearchParams();
    const pathname = usePathname();

    useEffect(() => {
        if (!prediction?.id) {
            return;
        }

        const el: Design = {
            color,
            type: type,
            removedBackground: readyRemoveBackground && removedBackground,
            predictionId: prediction.id,
            time: Date.now(),
        };

        let history = getLocalStorage<Design[]>(LOCAL_STORAGE_HISTORY_KEY);

        if (!history) {
            history = [];
        }

        const i = history.findIndex(
            (val) => val.predictionId === el.predictionId,
        );

        if (i === -1) {
            history.push(el);
        } else {
            history[i] = el;
        }

        history = history.sort((a, b) => b.time! - a.time!).slice(0, 15);
        setLocalStorage(LOCAL_STORAGE_HISTORY_KEY, history);
    }, [color, prediction?.id, type, removedBackground, readyRemoveBackground]);

    useEffect(() => {
        const url = addQueryParamToPath({
            pathname,
            query,
            params: {
                color,
                type: type,
                secondPage: secondPage,
                rmbg: removedBackground,
            },
        });

        router.replace(url, { scroll: false });
    }, [color, type, secondPage, query, pathname, router, removedBackground]);

    if (secondPage && color && type) {
        return (
            <ItemSizePick
                removedBackground={readyRemoveBackground && removedBackground}
                prediction={prediction}
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
                <Prompter value={prediction?.sourcePrompt} withRemain />
            </div>

            {(!prediction ||
                prediction.status === PredictionStatus.Created) && <ItemStub />}

            {prediction?.status === PredictionStatus.Failed && (
                <FailedPrediction />
            )}

            {prediction?.status === PredictionStatus.Ready && (
                <ItemPicker
                    removedBackground={
                        readyRemoveBackground && removedBackground
                    }
                    setRemovedBackground={(value) => {
                        refetch();
                        setRemovedBackground(value);
                    }}
                    prediction={prediction}
                    type={type || ItemType.Tshirt}
                    color={color}
                    setColor={setColor}
                    setType={setType}
                    onNext={() => setSecondPage(true)}
                />
            )}

            <History />
        </div>
    );
}
