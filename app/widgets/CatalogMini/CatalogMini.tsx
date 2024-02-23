import Link from 'next/link';
import { CatalogCard } from '../../components/CatalogCard/CatalogCard';
import styles from './CatalogMini.module.css';

import image from '../../../public/images/example1.png';
import { Button } from '../../components/Button/Button';

export const CatalogMini = () => {
    return (
        <div className={styles.catalog}>
            <div className={styles.cards}>
                <CatalogCard src={image} price={1599} />
                <CatalogCard src={image} price={1599} />
                <CatalogCard src={image} price={1599} />
                <CatalogCard src={image} price={1599} />
                <CatalogCard src={image} price={1599} />
                <CatalogCard src={image} price={1599} />
            </div>

            <Link href="/catalog">
                <Button>В каталог</Button>
            </Link>
        </div>
    );
};
