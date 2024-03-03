import axios from 'axios';
import { cache } from 'react';
import { Config } from '../../../../config/config';

export const getPrediction = cache(async (id: string) => {
    const res = await axios.get(`${Config.BACK_HOST}/query/${id}`);
    return res.data;
});
