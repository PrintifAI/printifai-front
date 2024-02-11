import Link from 'next/link';
import { CatalogCard } from '../CatalogCard/CatalogCard';
import styles from './CatalogMini.module.css';

export const CatalogMini = () => {
    return (
        <div className={styles.catalog}>
            <div className={styles.cards}>
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
            </div>

            <Link href="/catalog">В каталог</Link>
        </div>
    );
};
