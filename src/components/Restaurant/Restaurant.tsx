import { FC, use } from 'react';
import s from './Restaurant.module.css';
import { Menu } from '../Menu';
import { Reviews } from '../Rewievs';
import { ReviewForm } from '../ReviewForm';
import { AuthContext } from '../AuthContext';

type Props = {
  name: string;
  menu: string[];
  reviewsIds: string[];
};

export const Restaurant: FC<Props> = ({ name, menu, reviewsIds }) => {
  const { user } = use(AuthContext);

  return (
    <div className={s.container}>
      <div className={s.restaurant}>{name}</div>
      <div className={s.wrapper}>
        <Menu menu={menu} />
        {reviewsIds && <Reviews reviewsIds={reviewsIds} />}
        {user?.name && <ReviewForm />}
      </div>
    </div>
  );
};
