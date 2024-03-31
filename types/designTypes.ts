import { ItemColor } from '../constants/ItemColor';
import { ItemType } from './itemTypes';
import { PredictionResponse } from './predictionTypes';

export type Design = {
    prediction: PredictionResponse;
    color: ItemColor;
    type: ItemType;
    removedBackground: boolean;
    time?: number;
};

export const equalDesign = (a: Design | null, b: Design | null): boolean => {
    if (!a || !b) {
        return false;
    }

    return (
        a.prediction.id === b.prediction.id &&
        a.color === b.color &&
        a.type === b.type &&
        a.removedBackground === b.removedBackground
    );
};

export const designKey = (design: Design): string => {
    return JSON.stringify(design);
};
