import { Prompter } from '../../widgets/Prompter/Prompter';

import { getPrediction } from './actions/getPrediction';
import { BackButton } from './components/BackButton/BackButton';

import styles from './page.module.css';

import { ItemStub } from './components/ItemStub/ItemStub';

type Params = {
    id: string;
};

export default async function Prediction({ params }: { params: Params }) {
    const prediction = await getPrediction(params.id);

    return (
        <div className={styles.wrapper}>
            <BackButton />
            <div className={styles.prompterContainer}>
                <Prompter initial={prediction?.sourcePrompt} withRemain />
            </div>

            <ItemStub />
        </div>
    );
}
