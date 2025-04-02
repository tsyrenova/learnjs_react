import { FC, use } from 'react';
import { RestaurantType } from '../../type';
import s from './Restaurant.module.css';
import { Menu } from '../Menu';
import { Reviews } from '../Rewievs';
import { ReviewForm } from '../ReviewForm';
import { AuthContext } from '../AuthContext';

type Props = {
  restaurant: RestaurantType;
};

export const Restaurant: FC<Props> = ({ restaurant }) => {
  const { user } = use(AuthContext);

  return (
    <div className={s.container}>
      <div className={s.restaurant}>{restaurant.name}</div>
      <div className={s.wrapper}>
        <Menu menu={restaurant.menu} />
        <Reviews reviews={restaurant.reviews} />
        {user?.name && <ReviewForm />}
      </div>
    </div>
  );
};
