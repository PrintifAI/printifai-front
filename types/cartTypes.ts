import { ItemSize } from '../constants/ItemSize';
import { Design, equalDesign } from './designTypes';

export type CartItem = {
    design: Design;
    size: ItemSize;
    count: number;
};

export const equalCartItems = (a: CartItem, b: CartItem): boolean => {
    return equalDesign(a.design, b.design) && a.size === b.size;
};
