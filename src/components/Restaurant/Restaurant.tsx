import React from 'react';
import { RestaurantType } from '../../type';
import s from './Restaurant.module.css';

type RestaurantProps = {
  restaurant: RestaurantType;
};

export const Restaurant: React.FC<RestaurantProps> = ({ restaurant }) => {
  return (
    <>
      <div className={s.restaurant}>{restaurant.name}</div>
    </>
  );
};
