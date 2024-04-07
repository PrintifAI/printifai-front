import styles from './Input.module.css';

type Props = {
    placeholder?: string;
    name?: string;
    required?: boolean;
};

export const Input = ({ placeholder, name, required }: Props) => {
    return (
        <input
            className={styles.input}
            placeholder={placeholder}
            name={name}
            required={required}
        />
    );
};
