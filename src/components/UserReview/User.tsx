import { FC } from 'react';
import s from './User.module.css';
import { selectReviewById } from '../../redux/entities/reviews/slise';
import { selectUserById } from '../../redux/entities/users/slise';
import { RootState } from '../../type';
import { useSelector } from 'react-redux';

type Props = {
  id: string;
};

export const User: FC<Props> = ({ id }) => {
  const review = useSelector((state: RootState) => selectReviewById(state, id));
  const user = useSelector((state: RootState) => selectUserById(state, review.userId));

  if (!user && !review) {
    return null;
  }

  const { rating, text } = review;
  const { name } = user;

  return (
    <div className={s.container}>
      <h3>{name}</h3>
      <div>
        <p>Оценка: {rating}</p>
        <p>Комментарий: {text}</p>
      </div>
    </div>
  );
};
