import { StaticImageData } from 'next/image';
import { ItemType } from '../types/itemTypes';
import { TshirtColor, ShopperColor, HoodieColor } from './ItemColor';

import item1 from '../public/images/items/item1.png';
import item2 from '../public/images/items/item2.png';

export enum ItemTheme {
    Dark = 'dark',
    Light = 'light',
}

export const itemsMapping: Record<
    ItemType,
    Record<TshirtColor, { src: StaticImageData; theme: ItemTheme }>
> = {
    [ItemType.Tshirt]: {
        [TshirtColor.White]: { src: item1, theme: ItemTheme.Light },
        [TshirtColor.Black]: { src: item2, theme: ItemTheme.Dark },
        [TshirtColor.Red]: { src: item1, theme: ItemTheme.Light },
        [TshirtColor.LightBlue]: { src: item1, theme: ItemTheme.Light },
        [TshirtColor.Blue]: { src: item1, theme: ItemTheme.Dark },
        [TshirtColor.Pink]: { src: item1, theme: ItemTheme.Light },
        [TshirtColor.Purple]: { src: item1, theme: ItemTheme.Light },
    },
    [ItemType.Shopper]: {
        [ShopperColor.White]: { src: item1, theme: ItemTheme.Light },
        [ShopperColor.Black]: { src: item2, theme: ItemTheme.Dark },
        [ShopperColor.Red]: { src: item1, theme: ItemTheme.Light },
        [ShopperColor.LightBlue]: { src: item1, theme: ItemTheme.Light },
        [ShopperColor.Blue]: { src: item1, theme: ItemTheme.Dark },
        [ShopperColor.Pink]: { src: item1, theme: ItemTheme.Light },
        [ShopperColor.Purple]: { src: item1, theme: ItemTheme.Light },
    },
    [ItemType.Hoodie]: {
        [HoodieColor.White]: { src: item1, theme: ItemTheme.Light },
        [HoodieColor.Black]: { src: item2, theme: ItemTheme.Dark },
        [HoodieColor.Red]: { src: item1, theme: ItemTheme.Light },
        [HoodieColor.LightBlue]: { src: item1, theme: ItemTheme.Light },
        [HoodieColor.Blue]: { src: item1, theme: ItemTheme.Dark },
        [HoodieColor.Pink]: { src: item1, theme: ItemTheme.Light },
        [HoodieColor.Purple]: { src: item1, theme: ItemTheme.Light },
    },
};
