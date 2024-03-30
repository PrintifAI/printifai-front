import { ItemColor } from '../constants/ItemColor';
import { ItemType } from './itemTypes';

export type Design = {
    predictionId: string;
    color: ItemColor;
    type: ItemType;
    removedBackground: boolean;
    time?: number;
};
