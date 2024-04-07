import Link from 'next/link';
import { CatalogCard } from '../../components/CatalogCard/CatalogCard';
import styles from './CatalogMini.module.css';

import { Button, ButtonSize } from '../../components/Button/Button';
import { TshirtColor } from '../../../constants/ItemColor';
import { ItemType } from '../../../types/itemTypes';
import { Design, designKey } from '../../../types/designTypes';
import { PredictionStatus } from '../../../types/predictionTypes';

const MainPageDesigns: Design[] = [
    {
        prediction: {
            id: 'ed536d83-7d53-4267-a3a4-3faf9c29413f',
            sourcePrompt: 'милый хомяк принт на футболку',
            status: PredictionStatus.Ready,
            removedBackground: [{ status: PredictionStatus.Ready }],
        },
        removedBackground: true,
        type: ItemType.Tshirt,
        color: TshirtColor.White,
    },
    {
        prediction: {
            id: '62d6f18b-379d-4eb8-b18b-83289159ed0f',
            sourcePrompt:
                'Ярко желтые огни на фоне домов на белом фоне принт на футболку',
            status: PredictionStatus.Ready,
            removedBackground: [{ status: PredictionStatus.Ready }],
        },
        removedBackground: false,
        type: ItemType.Tshirt,
        color: TshirtColor.Black,
    },
    {
        prediction: {
            id: 'a9f91453-3e10-44e7-b6a7-015f0a57b27b',
            sourcePrompt:
                'маленький единорог на фоне большого города принт на футболку',
            status: PredictionStatus.Ready,
            removedBackground: [{ status: PredictionStatus.Ready }],
        },
        removedBackground: false,
        type: ItemType.Tshirt,
        color: TshirtColor.White,
    },
    {
        prediction: {
            id: 'cb061db6-8607-4728-9ed5-74b17008d58a',
            sourcePrompt: 'космонавт верхом на радужном единороге',
            status: PredictionStatus.Ready,
            removedBackground: [{ status: PredictionStatus.Ready }],
        },
        removedBackground: false,
        type: ItemType.Tshirt,
        color: TshirtColor.White,
    },
    {
        prediction: {
            id: '2200fc4b-8894-4192-ad5d-8eead885a131',
            sourcePrompt: 'единорог принт на футболку',
            status: PredictionStatus.Ready,
            removedBackground: [{ status: PredictionStatus.Ready }],
        },
        removedBackground: false,
        type: ItemType.Tshirt,
        color: TshirtColor.White,
    },
    {
        prediction: {
            id: '3ccec012-ec84-4d85-b01a-4dc9ef50594a',
            sourcePrompt: 'космонавт верхом на единороге принт на футболку',
            status: PredictionStatus.Ready,
            removedBackground: [{ status: PredictionStatus.Ready }],
        },
        removedBackground: true,
        type: ItemType.Tshirt,
        color: TshirtColor.Black,
    },
];

export const CatalogMini = () => {
    return (
        <div className={styles.catalog}>
            <div className={styles.cards}>
                {MainPageDesigns.map((design) => (
                    <CatalogCard design={design} key={designKey(design)} />
                ))}
            </div>

            <Link href="/catalog">
                <Button size={ButtonSize.Large}>В каталог</Button>
            </Link>
        </div>
    );
};
