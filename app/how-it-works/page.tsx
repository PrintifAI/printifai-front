import Image from 'next/image';
import { BackgroundFigures } from '../components/BackgroundFigures/BackgroundFigures';

import rectangle1 from '../../public/images/how-it-works/rectangle1.svg';
import rectangle2 from '../../public/images/how-it-works/rectangle2.svg';
import rectangle3 from '../../public/images/how-it-works/rectangle3.svg';

import styles from './page.module.css';

export default function Galery() {
    return (
        <>
            <BackgroundFigures />

            <div className={styles.wrapper}>
                <div className={styles.headText}>
                    Создавайте уникальные изображения для ваших <br />
                    изделий с помощью искусственного интеллекта
                </div>

                <div className={styles.cards}>
                    <div className={styles.card}>
                        <Image
                            className={styles.image}
                            src={rectangle1}
                            alt="Написание промпта"
                        />
                        <div className={styles.cardHead}>Написание промпта</div>
                        <div className={styles.cardBody}>
                            Напишите подробный промпт, указав содержание
                            желаемого изображения для оптимальной генерации в
                            Stable Diffusion
                        </div>
                    </div>
                    <div className={styles.card}>
                        <Image
                            className={styles.image}
                            src={rectangle2}
                            alt="Генерация изображения"
                        />
                        <div className={styles.cardHead}>
                            Генерация изображения
                        </div>
                        <div className={styles.cardBody}>
                            Нейросеть генерирует изображение <br />
                            на основе вашего промпта.
                            <br />
                            Обычно это не занимает более минуты
                        </div>
                    </div>
                    <div className={styles.card}>
                        <Image
                            className={styles.image}
                            src={rectangle3}
                            alt="Редактирование"
                        />
                        <div className={styles.cardHead}>Редактирование</div>
                        <div className={styles.cardBody}>
                            После завершения генерации Вы можете подобрать
                            различные цвета
                            <br /> и фасоны или попробовать новую
                            <br />
                            генерацию
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
