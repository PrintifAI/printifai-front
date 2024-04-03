import { Config } from '../../config/config';
import { TshirtColor } from '../../constants/ItemColor';
import { Design, designKey } from '../../types/designTypes';
import { ItemType } from '../../types/itemTypes';
import { PredictionResponse } from '../../types/predictionTypes';
import { CatalogCard } from '../components/CatalogCard/CatalogCard';
import styles from './page.module.css';

export async function getQueries(): Promise<{
    data: PredictionResponse[];
    count: number;
}> {
    return fetch(Config.BACK_HOST + '/query?size=20')
        .then((res) => res.json())
        .catch(() => ({
            count: 0,
            data: [],
        }));
}

export default async function Galery() {
    const { data } = await getQueries();

    const cards: Design[] = data.map((prediction) => {
        return {
            prediction: prediction,
            removedBackground: false,
            type: ItemType.Tshirt,
            color: TshirtColor.White,
        };
    });

    return (
        <div className={styles.wrapper}>
            {data.length === 0 && (
                <div className={styles.notfound}>
                    Товары не найдены. <br /> Попробуйте перезагрузить страницу
                </div>
            )}
            <div className={styles.header}>Товаров: {data.length}</div>
            <div className={styles.catalogMain}>
                {cards.map((design) => {
                    return (
                        <CatalogCard key={designKey(design)} design={design} />
                    );
                })}
            </div>
        </div>
    );
}
