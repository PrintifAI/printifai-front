import { Config } from '../config/config';

export const getImageLink = (id: string) => {
    return `${Config.BACK_HOST}/query/${id}/image`;
};
