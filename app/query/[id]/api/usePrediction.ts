import { useQuery } from '@tanstack/react-query';

import axios from 'axios';
import { Config } from '../../../../config/config';
import { PredictionResponse } from '../../../../types/predictionTypes';

export const usePrediction = (id?: string) => {
    return useQuery({
        queryKey: ['prediction', id],
        queryFn: () =>
            axios
                .get<PredictionResponse>(`${Config.BACK_HOST}/query/${id}`, {
                    params: {},
                })
                .then((res) => res.data),
        enabled: !!id,
    });
};
