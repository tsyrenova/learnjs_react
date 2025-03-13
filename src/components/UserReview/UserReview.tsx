import React from 'react';
import { Review } from '../../type';
import s from './UserReview.module.css';

type UserReviewProps = {
  review: Review;
};

export const UserReview: React.FC<UserReviewProps> = ({ review }) => {
  const { user, rating, text } = review;

  return (
    <div className={s.container}>
      <h3>{user}</h3>
      <div>
        <p>Оценка: {rating}</p>
        <p>Комментарий: {text}</p>
      </div>
    </div>
  );
};
