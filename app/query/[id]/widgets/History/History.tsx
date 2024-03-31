'use client';

import Link from 'next/link';
import { LOCAL_STORAGE_HISTORY_KEY } from '../../../../../constants/LocalStorageKeys';
import { Design } from '../../../../../types/designTypes';
import { getLocalStorage } from '../../../../../utils/localStorage';
import { ItemCard } from '../../../../components/ItemCard/ItemCard';

import styles from './History.module.css';
import { getCardLink } from '../../../../../utils/getCardLink';
import dynamic from 'next/dynamic';

const HistoryComponent = () => {
    const history = getLocalStorage<Design[]>(LOCAL_STORAGE_HISTORY_KEY)?.slice(
        0,
        3,
    );

    return (
        <div className={styles.history}>
            <div className={styles.historyHeadText}>Предыдущие генерации</div>
            <div className={styles.cards}>
                {history &&
                    history.map((design) => (
                        <Link
                            href={getCardLink(design)}
                            className={styles.itemCard}
                            key={design.prediction.id}
                        >
                            <ItemCard
                                type={design.type}
                                color={design.color}
                                predictionId={design.prediction.id}
                                removedBackground={design.removedBackground}
                            />
                        </Link>
                    ))}
            </div>
        </div>
    );
};

export const History = dynamic(() => Promise.resolve(HistoryComponent), {
    ssr: false,
});
