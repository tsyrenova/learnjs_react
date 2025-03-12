import { Menu as MenuType } from '../../type';
import s from './Menu.module.css';

export const Menu = ({ menu }: { menu: MenuType[] }) => {
  return (
    <div>
      <h3 className={s.title}>Меню</h3>
      <ul className={s.menu}>
        {menu.map((item) => (
          <li key={item.id} className={s.dish}>
            <h3>{item.name}</h3>
            <p>Ингредиенты: {item.ingredients.length ? item.ingredients.join(', ') : '-'}</p>
            <p>Цена: {item.price !== 0 ? item.price + ' ₽' : '-'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
