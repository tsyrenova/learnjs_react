import React from 'react';
import { Review as ReviewType } from '../../type';
import s from './Rewievs.module.css';

type RewievsProps = { reviews: ReviewType[] };

export const Reviews: React.FC<RewievsProps> = ({ reviews }) => {
  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Отзывы</h3>
      {reviews.length ? (
        <ul className={s.reviews}>
          {reviews.map((review) => (
            <li key={review.id} className={s.review}>
              <h3>{review.user}</h3>
              <p>Оценка: {review.rating}</p>
              <p>Комментарий: {review.text}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>Отзывов нет</div>
      )}
    </div>
  );
};
