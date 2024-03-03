import Link from 'next/link';
import styles from './BackButton.module.css';

export const BackButton = () => {
    return (
        <div className={styles.block}>
            <Link href="/">На главную</Link>
        </div>
    );
};
