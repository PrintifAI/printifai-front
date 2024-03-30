import { motion } from 'framer-motion';
import { ItemColor } from '../../../constants/ItemColor';
import { ItemType } from '../../../types/itemTypes';
import { ItemTheme, ItemsMapping } from '../../../constants/itemMapping';
import { ItemWithImage } from '../ItemWithImage/ItemWithImage';
import { getImageLink } from '../../../utils/getImageLink';

import styles from './ItemCard.module.css';

type Props = {
    predictionId: string;
    type: ItemType;
    color: ItemColor;
    removedBackground: boolean;
    loading?: boolean;
};

export const ItemCard = ({
    type,
    color,
    predictionId,
    removedBackground,
    loading,
}: Props) => {
    return (
        <motion.div
            className={styles.itemWithImage}
            animate={{
                backgroundColor:
                    ItemsMapping[type][color].theme === ItemTheme.Dark
                        ? 'var(--grey-white, #EEE)'
                        : 'var(--txt-black)',
            }}
        >
            <ItemWithImage
                loading={loading}
                itemSrc={ItemsMapping[type][color].src}
                imageSrc={getImageLink(predictionId, removedBackground)}
                type={type}
            />
        </motion.div>
    );
};
