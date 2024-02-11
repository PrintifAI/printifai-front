import styles from './page.module.css';
import { Prompter } from './components/Prompter/Prompter';
import { CatalogMini } from './components/CatalogMini/CatalogMini';

export default function Main() {
    return (
        <div className="">
            <div className="">
                <div>Футболка о которой вы мечтали</div>
                <div>Просто попробуйте</div>
            </div>
            <Prompter />
            <div>
                Вся мощь искусственного интеллекта для создания лучших вещей
            </div>
            <CatalogMini />
        </div>
    );
}
