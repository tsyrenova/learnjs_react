import { FC, use } from 'react';
import s from './Restaurant.module.css';
import { Menu } from '../Menu';
import { Reviews } from '../Rewievs';
import { ReviewForm } from '../ReviewForm';
import { AuthContext } from '../AuthContext';

type Props = {
  name: string;
  menu: string[];
  reviews: string[];
};

export const Restaurant: FC<Props> = ({ name, menu, reviews }) => {
  const { user } = use(AuthContext);

  return (
    <div className={s.container}>
      <div className={s.restaurant}>{name}</div>
      <div className={s.wrapper}>
        <Menu menu={menu} />
        {reviews && <Reviews reviewsIds={reviews} />}
        {user?.name && <ReviewForm />}
      </div>
    </div>
  );
};
