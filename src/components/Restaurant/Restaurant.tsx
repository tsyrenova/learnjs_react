import { FC } from 'react';
import { RestaurantType } from '../../type';
import s from './Restaurant.module.css';
import { Menu } from '../Menu';
import { Reviews } from '../Rewievs';
import { ReviewForm } from '../ReviewForm';

type Props = {
  restaurant: RestaurantType;
};

export const Restaurant: FC<Props> = ({ restaurant }) => {
  return (
    <div className={s.container}>
      <div className={s.restaurant}>{restaurant.name}</div>
      <div className={s.wrapper}>
        <Menu menu={restaurant.menu} />
        <Reviews reviews={restaurant.reviews} />
        <ReviewForm />
      </div>
    </div>
  );
};
