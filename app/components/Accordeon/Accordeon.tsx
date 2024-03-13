import { ReactNode } from 'react';

import styles from './Accordeon.module.css';

type Props = {
    children: ReactNode;
};

export const Accordeon = ({ children }: Props) => {
    return <>{children}</>;
};
