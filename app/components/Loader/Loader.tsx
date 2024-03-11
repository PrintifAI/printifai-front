import clsx from 'clsx';
import styles from './Loader.module.css';
export const Loader = () => {
    return (
        <div className={styles.loader}>
            <div className={styles.spinner}>
                <div className={clsx(styles.square, styles['square-1'])}></div>
                <div className={clsx(styles.square, styles['square-2'])}></div>
                <div className={clsx(styles.square, styles['square-3'])}></div>
            </div>
        </div>
    );
};
