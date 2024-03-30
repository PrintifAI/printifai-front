import { ReactNode } from 'react';

import styles from './Button.module.css';
import clsx from 'clsx';

export const enum ButtonTheme {
    WhiteBackground = 'white',
    BlackBackground = 'black',
}

export const enum ButtonSize {
    Large = 'large',
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
    disabled?: boolean;
    loading?: boolean;
    id?: string;
};

export const Button = ({
    children,
    className,
    left,
    onClick,
    theme,
    size = ButtonSize.Medium,
    type = 'button',
    disabled = false,
    loading = false,
    id,
}: Props) => {
    return (
        <button
            id={id}
            className={clsx(
                styles.button,
                theme === ButtonTheme.WhiteBackground
                    ? styles.buttonWhite
                    : styles.buttonBlack,
                size === ButtonSize.Small
                    ? styles.buttonSmall
                    : size === ButtonSize.Medium
                      ? styles.buttonMedium
                      : styles.buttonLarge,
                loading ? styles.loading : undefined,
                className,
            )}
            onClick={onClick}
            type={type}
            disabled={disabled || loading}
        >
            {left} {children}
        </button>
    );
};
