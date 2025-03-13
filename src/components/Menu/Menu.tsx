import React from 'react';
import { Menu as MenuType } from '../../type';
import { Dish } from '../Dish';
import s from './Menu.module.css';

type MenuProps = { menu: MenuType[] };

export const Menu: React.FC<MenuProps> = ({ menu }) => {
  return (
    <div>
      <h3 className={s.title}>Меню</h3>
      {menu.length ? (
        <ul className={s.menu}>
          {menu.map((item) => (
            <li key={item.id} className={s.dish}>
              <Dish dish={item} />
            </li>
          ))}
        </ul>
      ) : (
        <div>Меню отсутствует</div>
      )}
    </div>
  );
};
