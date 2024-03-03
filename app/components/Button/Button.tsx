import { ReactNode } from 'react';

import styles from './Button.module.css';
import clsx from 'clsx';

export const enum ButtonTheme {
    WhiteBackground = 'white',
    BlackBackground = 'black',
}

export const enum ButtonSize {
    Medium = 'medium',
    Small = 'small',
}

type Props = {
    children: ReactNode;
    left?: ReactNode;
    onClick?: () => void;
    theme?: ButtonTheme;
    size?: ButtonSize;
    className?: string;
    type?: 'button' | 'submit';
};

export const Button = ({
    children,
    className,
    left,
    onClick,
    theme,
    size,
    type = 'button',
}: Props) => {
    return (
        <button
            className={clsx(
                theme === ButtonTheme.WhiteBackground
                    ? styles.buttonWhite
                    : styles.buttonBlack,
                size === ButtonSize.Small
                    ? styles.buttonSmall
                    : styles.buttonMedium,
                styles.button,
                className,
            )}
            onClick={onClick}
            type={type}
        >
            {left}

            <div>{children}</div>
        </button>
    );
};
