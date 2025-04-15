import { FC } from 'react';
import s from './Rewievs.module.css';
import { Review } from '../Review';

type Props = { reviewsIds: string[] };

export const Reviews: FC<Props> = ({ reviewsIds }) => {
  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Отзывы</h3>
      {reviewsIds.length ? (
        <ul className={s.reviews}>
          {reviewsIds.map((id) => (
            <li key={id} className={s.review}>
              <Review id={id} />
            </li>
          ))}
        </ul>
      ) : (
        <div>Отзывов нет</div>
      )}
    </div>
  );
};
