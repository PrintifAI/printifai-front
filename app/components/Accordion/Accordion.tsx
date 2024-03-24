'use client';

import { ReactNode, useState } from 'react';

import styles from './Accordion.module.css';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

type Props = {
    children: ReactNode;
    title: string;
};

export const Accordion = ({ children, title }: Props) => {
    const [opened, setOpened] = useState(false);

    return (
        <div className={styles.accordeon}>
            <div className={styles.flex} onClick={() => setOpened(!opened)}>
                <div>{title}</div>
                <div>{opened ? <MinusOutlined /> : <PlusOutlined />}</div>
            </div>
            <div
                className={styles.content}
                style={{
                    display: opened ? 'block' : 'none',
                }}
            >
                {children}
            </div>
        </div>
    );
};
