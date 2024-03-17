import styles from './BackButtonWithEvent.module.css';

import iconBack from '../../../../../public/icons/icon_back.svg';
import Image from 'next/image';

type Props = {
    onClick: () => void;
};

export const BackButtonWithEvent = ({ onClick }: Props) => {
    return (
        <div className={styles.block}>
            <button className={styles.text} onClick={onClick}>
                <Image src={iconBack} alt="Назад" />
                Назад
            </button>
        </div>
    );
};
