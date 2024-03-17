import { ReactNode } from 'react';

import styles from './Accordeon.module.css';
import { PlusOutlined } from '@ant-design/icons';

type Props = {
    children: ReactNode;
    title: string;
};

export const Accordeon = ({ children, title }: Props) => {
    return (
        <div className={styles.accordeon}>
            <div className={styles.flex}>
                <div>{title}</div>
                <div>
                    <PlusOutlined />
                </div>
            </div>
            <div className={styles.content}>{children}</div>
        </div>
    );
};
