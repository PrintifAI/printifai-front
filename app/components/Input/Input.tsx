import styles from './Input.module.css';

type Props = {
    placeholder?: string;
    name?: string;
};

export const Input = ({ placeholder, name }: Props) => {
    return (
        <input className={styles.input} placeholder={placeholder} name={name} />
    );
};
