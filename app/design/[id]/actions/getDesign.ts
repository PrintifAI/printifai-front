import axios from 'axios';
import { cache } from 'react';
import { Config } from '../../../../config/config';
import { DesignResponse } from '../../../../types/designTypes';

export const getDesign = cache(async (id: string) => {
    const res = await axios.get<DesignResponse>(
        `${Config.BACK_HOST}/design/${id}`,
    );
    return res.data;
});
