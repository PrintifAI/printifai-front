import { ItemColor } from '../constants/ItemColor';

export enum ItemType {
    Tshirt = 't-shirt',
    Hoodie = 'hoodie',
    Shopper = 'shopper',
}

export type Item = {
    type: ItemType;
    color: ItemColor;
};
