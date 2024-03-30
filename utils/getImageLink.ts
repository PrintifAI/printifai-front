import { Config } from '../config/config';

export const getImageLink = (id: string, removedBackground = false) => {
    if (removedBackground) {
        return `${Config.BACK_HOST}/query/${id}/removed-background`;
    }
    return `${Config.BACK_HOST}/query/${id}/image`;
};
