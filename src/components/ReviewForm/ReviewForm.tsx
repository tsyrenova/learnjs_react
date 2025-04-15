import React from 'react';
import { Count } from '../Count';
import s from './ReviewForm.module.css';
import { useReviewForm } from '../hooks/useReviewForm';

export const ReviewForm = () => {
  const { form, setName, setRating, setComment, reset } = useReviewForm();
  const { name, comment, rating } = form;

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <h3>Оставить отзыв</h3>
      <div className={s.wrapper}>
        <span>Имя: </span>
        <input type="text" value={name} onChange={setName} />
      </div>
      <div className={s.wrapper}>
        <span>Комментарий: </span>
        <input type="text" value={comment} onChange={setComment} />
      </div>
      <div className={s.wrapper}>
        <span>Рейтинг: </span>
        <Count count={rating} onIncrement={() => setRating(rating + 1)} onDecrement={() => setRating(rating - 1)} />
      </div>
      <div className={s.buttonWrapper}>
        <button type="submit" className={s.saveButton}>
          Сохранить
        </button>
        <button className={s.clearButton} onClick={reset}>
          Очистить
        </button>
      </div>
    </form>
  );
};
