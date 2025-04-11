import { FC } from 'react';
import s from './Rewievs.module.css';
import { UserContainer } from '../UserContainer';

type Props = { reviewsIds: string[] };

export const Reviews: FC<Props> = ({ reviewsIds }) => {
  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Отзывы</h3>
      {reviewsIds.length ? (
        <ul className={s.reviews}>
          {reviewsIds.map((reviewId) => (
            <li key={reviewId} className={s.review}>
              <UserContainer id={reviewId} />
            </li>
          ))}
        </ul>
      ) : (
        <div>Отзывов нет</div>
      )}
    </div>
  );
};
