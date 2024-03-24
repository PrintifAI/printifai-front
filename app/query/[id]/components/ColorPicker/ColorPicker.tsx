import clsx from 'clsx';
import { ItemColor } from '../../../../../constants/ItemColor';
import { ItemsMapping, ItemTheme } from '../../../../../constants/itemMapping';

import styles from './ColorPicker.module.css';
import { ItemType } from '../../../../../types/itemTypes';

type CommonProps = {
    align?: 'flex-start' | 'center';
};

type Props = {
    color: ItemColor;
    onChange: (color: ItemColor) => void;
    itemType: ItemType;
} & CommonProps;

export const ColorPicker = ({
    color,
    onChange,
    itemType,
    align = 'center',
}: Props) => {
    return (
        <div className={styles.colorPicker} style={{ justifyContent: align }}>
            {Object.keys(ItemsMapping[itemType]).map((key) => (
                <button
                    key={key}
                    className={clsx(
                        color === key
                            ? ItemsMapping[itemType][color].theme ===
                              ItemTheme.Dark
                                ? styles.borderWhite
                                : styles.borderBlack
                            : undefined,
                        styles.colorEllipse,
                    )}
                    style={{
                        backgroundColor: key,
                    }}
                    onClick={() => {
                        onChange(key as ItemColor);
                    }}
                />
            ))}
        </div>
    );
};
