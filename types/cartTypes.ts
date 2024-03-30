import { ItemSize } from '../constants/ItemSize';
import { Design } from './designTypes';

export type CartItem = {
    design: Design;
    size: ItemSize;
    count: number;
};
