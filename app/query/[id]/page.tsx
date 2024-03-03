import { ItemWithImage } from '../../components/ItemWithImage/ItemWithImage';
import { Prompter } from '../../widgets/Prompter/Prompter';

import { getPrediction } from './actions/getPrediction';
import { BackButton } from './components/BackButton/BackButton';

import styles from './page.module.css';

import item from '../../../public/images/items/item1.png';
import { Config } from '../../../config/config';

type Params = {
    id: string;
};

export default async function Prediction({ params }: { params: Params }) {
    const prediction = await getPrediction(params.id);

    return (
        <div className={styles.wrapper}>
            <BackButton />
            <div className={styles.prompterContainer}>
                <Prompter initial={prediction?.sourcePrompt} />
            </div>

            <div>Осталось генераций: 10 из 10</div>
            <div>Генерация...</div>
            <div className={styles.itemWithImage}>
                <ItemWithImage
                    imageSrc={`${Config.BACK_HOST}/query/${params.id}/image`}
                    itemSrc={item}
                />
            </div>
        </div>
    );
}
