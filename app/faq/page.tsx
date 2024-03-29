import { Accordion } from '../components/Accordion/Accordion';
import { BackgroundFigures } from '../components/BackgroundFigures/BackgroundFigures';
import styles from './page.module.css';
export default function Galery() {
    return (
        <>
            <BackgroundFigures />

            <div className={styles.wrapper}>
                <div className={styles.headText}>Часто задаваемые вопросы</div>
                <div className={styles.accordions}>
                    <Accordion title="Как долго генерируется изображение?">
                        Генерация изображения занимает не больше минуты
                    </Accordion>
                    <Accordion title="Можно ли генерировать изображения неограниченное количество раз?">
                        Вы можете генерировать изображения не более 10 раз в
                        сутки
                    </Accordion>
                    <Accordion title="Способы доставки">
                        На данный момент доступны 3 способа доставки – Почта
                        России, СДЭК и PickPoint
                    </Accordion>
                    <Accordion title="Как отслеживать заказ?">
                        После оформления заказа на Вашу почту приходит
                        уникальная ссылка, по которой можно посмотреть статус
                        заказа
                    </Accordion>
                </div>
            </div>
        </>
    );
}
