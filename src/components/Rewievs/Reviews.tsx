import { FC } from 'react';
import { Review as ReviewType } from '../../type';
import s from './Rewievs.module.css';
import { UserReview } from '../UserReview';

type Props = { reviews: ReviewType[] };

export const Reviews: FC<Props> = ({ reviews }) => {
  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Отзывы</h3>
      {reviews.length ? (
        <ul className={s.reviews}>
          {reviews.map((review) => (
            <li key={review.id} className={s.review}>
              <UserReview review={review} />
            </li>
          ))}
        </ul>
      ) : (
        <div>Отзывов нет</div>
      )}
    </div>
  );
};
