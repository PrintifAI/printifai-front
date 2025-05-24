import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import styles from './InputNumber.module.css';
import { ChangeEventHandler } from 'react';

type Props = {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
};

export const InputNumber = ({ value, onChange, min = 1, max = 99 }: Props) => {
    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const num = +e.target.value.replace(/\D/g, '');
        if (num > max) {
            return onChange(max);
        }
        if (num < min) {
            return onChange(min);
        }
        return onChange(num);
    };
    return (
        <div className={styles.block}>
            <MinusOutlined
                size={24}
                onClick={() => onChange(value - 1 < min ? value : value - 1)}
            />
            <input
                size={3}
                min={min}
                max={max}
                value={value}
                onChange={handleChange}
            />
            <PlusOutlined
                size={24}
                onClick={() => onChange(value + 1 > max ? value : value + 1)}
            />
        </div>
    );
};
