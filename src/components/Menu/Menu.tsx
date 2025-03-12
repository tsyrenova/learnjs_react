import { Fragment } from 'react/jsx-runtime';
import { Menu as MenuType } from '../../type';
import { Dish } from '../Dish';
import s from './Menu.module.css';

export const Menu = ({ menu }: { menu: MenuType[] }) => {
  return (
    <div>
      <h3 className={s.title}>Меню</h3>
      {menu.length ? (
        <ul className={s.menu}>
          {menu.map((item) => (
            <Fragment key={item.id}>
              <Dish dish={item} />
            </Fragment>
          ))}
        </ul>
      ) : (
        <div>Меню отсутствует</div>
      )}
    </div>
  );
};
