import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import styles from './InputNumber.module.css';
import { ChangeEventHandler } from 'react';

type Props = {
    value: number;
    onChange: (value: number) => void;
};

export const InputNumber = ({ value, onChange }: Props) => {
    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const num = +e.target.value.replace(/\D/g, '');
        return onChange(num);
    };
    return (
        <div className={styles.block}>
            <MinusOutlined size={24} onClick={() => onChange(value - 1)} />
            <input
                size={3}
                min="0"
                max="99"
                value={value}
                onChange={handleChange}
            />
            <PlusOutlined size={24} onClick={() => onChange(value + 1)} />
        </div>
    );
};
