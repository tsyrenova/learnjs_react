import { FC } from 'react';
import s from './Menu.module.css';
import { DishContainer } from '../DishContainer';

type Props = { menu: string[] };

export const Menu: FC<Props> = ({ menu }) => {
  return (
    <div>
      <h3 className={s.title}>Меню</h3>
      {menu.length ? (
        <ul className={s.menu}>
          {menu.map((dishId) => (
            <li key={dishId} className={s.dish}>
              <DishContainer id={dishId} />
            </li>
          ))}
        </ul>
      ) : (
        <div>Меню отсутствует</div>
      )}
    </div>
  );
};
