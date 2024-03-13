import { Item } from '../types/itemTypes';

export const getCardLink = (predictionId: string, item: Item) => {
    const query = new URLSearchParams({
        ...item,
    });

    return `/query/${predictionId}?${query.toString()}`;
};
