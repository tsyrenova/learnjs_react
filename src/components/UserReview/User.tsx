import { FC } from 'react';
import s from './User.module.css';

type Props = {
  name: string;
  rating: number;
  text: string;
};

export const User: FC<Props> = ({ name, rating, text }) => {
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
