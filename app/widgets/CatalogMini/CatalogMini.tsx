import Link from 'next/link';
import { CatalogCard } from '../../components/CatalogCard/CatalogCard';
import styles from './CatalogMini.module.css';

import { Button } from '../../components/Button/Button';
import { TshirtColor } from '../../../constants/ItemColor';
import { ItemType } from '../../../types/itemTypes';
import { Design } from '../../../types/designTypes';

const MainPageDesigns: Design[] = [
    {
        predictionId: 'a9f91453-3e10-44e7-b6a7-015f0a57b27b',
        removedBackground: false,
        type: ItemType.Tshirt,
        color: TshirtColor.White,
    },
    {
        predictionId: 'a9f91453-3e10-44e7-b6a7-015f0a57b27b',
        removedBackground: false,
        type: ItemType.Tshirt,
        color: TshirtColor.White,
    },
    {
        predictionId: 'a9f91453-3e10-44e7-b6a7-015f0a57b27b',
        removedBackground: false,
        type: ItemType.Tshirt,
        color: TshirtColor.White,
    },
    {
        predictionId: 'a9f91453-3e10-44e7-b6a7-015f0a57b27b',
        removedBackground: false,
        type: ItemType.Tshirt,
        color: TshirtColor.White,
    },
    {
        predictionId: 'a9f91453-3e10-44e7-b6a7-015f0a57b27b',
        removedBackground: false,
        type: ItemType.Tshirt,
        color: TshirtColor.White,
    },
    {
        predictionId: 'a9f91453-3e10-44e7-b6a7-015f0a57b27b',
        removedBackground: false,
        type: ItemType.Tshirt,
        color: TshirtColor.White,
    },
];

export const CatalogMini = () => {
    return (
        <div className={styles.catalog}>
            <div className={styles.cards}>
                {MainPageDesigns.map((design) => (
                    <CatalogCard design={design} key={design.predictionId} />
                ))}
            </div>

            <Link href="/catalog">
                <Button>В каталог</Button>
            </Link>
        </div>
    );
};
