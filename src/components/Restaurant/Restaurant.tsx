import React from 'react';
import { RestaurantType } from '../../type';
import s from './Restaurant.module.css';
import { Menu } from '../Menu';
import { Reviews } from '../Rewievs';

type RestaurantProps = {
  restaurant: RestaurantType;
};

export const Restaurant: React.FC<RestaurantProps> = ({ restaurant }) => {
  return (
    <div className={s.container}>
      <div className={s.restaurant}>{restaurant.name}</div>
      <div className={s.wrapper}>
        <Menu menu={restaurant.menu} />
        <Reviews reviews={restaurant.reviews} />
      </div>
    </div>
  );
};
