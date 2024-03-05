import Link from 'next/link';
import styles from './BackButton.module.css';

import iconBack from '../../../../../public/icons/icon_back.svg';
import Image from 'next/image';

export const BackButton = () => {
    return (
        <div className={styles.block}>
            <Link href="/" className={styles.text}>
                <Image src={iconBack} alt="Назад" />
                На главную
            </Link>
        </div>
    );
};
