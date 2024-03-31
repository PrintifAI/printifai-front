import { Design } from '../types/designTypes';

export const getCardLink = ({
    prediction,
    color,
    type,
    removedBackground,
}: Design) => {
    let query: any = {
        color,
        type,
    };

    if (removedBackground) {
        query.rmbg = 'true';
    }

    const queryString = new URLSearchParams(query).toString();

    return `/query/${prediction.id}?${queryString}`;
};
