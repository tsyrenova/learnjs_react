import React from 'react';
import { Count } from '../Count';
import s from './ReviewForm.module.css';
import { useReviewForm } from '../hooks/useReviewForm';
import { ACTION } from './constants';

export const ReviewForm = () => {
  const { form, dispatch } = useReviewForm();
  const { name, comment, rating } = form;

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <div className={s.wrapper}>
        <span>Имя: </span>
        <input
          type="text"
          value={name}
          onChange={(evt) => dispatch({ type: ACTION.SET_NAME, payload: evt.target.value })}
        />
      </div>
      <div className={s.wrapper}>
        <span>Комментарий: </span>
        <input
          type="text"
          value={comment}
          onChange={(evt) => dispatch({ type: ACTION.SET_COMMENT, payload: evt.target.value })}
        />
      </div>
      <div className={s.wrapper}>
        <span>Рейтинг: </span>
        <Count
          count={rating}
          onIncrement={() => {
            dispatch({ type: ACTION.SET_RATING, payload: rating + 1 });
          }}
          onDecrement={() => {
            dispatch({ type: ACTION.SET_RATING, payload: rating - 1 });
          }}
        />
      </div>
      <div className={s.buttonWrapper}>
        <button type="submit" className={s.saveButton}>
          Сохранить
        </button>
        <button className={s.clearButton} onClick={() => dispatch({ type: ACTION.RESET })}>
          Очистить
        </button>
      </div>
    </form>
  );
};
