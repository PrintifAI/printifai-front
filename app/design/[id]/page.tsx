import { getDesign } from './actions/getDesign';

import styles from './page.module.css';

type Params = {
    id: string;
};

export default async function Design({ params }: { params: Params }) {
    const design = await getDesign(params.id);

    return <div className={styles.wrapper}>{design.id}</div>;
}
