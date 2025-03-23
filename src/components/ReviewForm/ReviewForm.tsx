import React, { useReducer } from 'react';
import { Count } from '../Count';
import s from './ReviewForm.module.css';
import { MAX_COUNT, MIN_COUNT } from '../constants';

const DEFAULT_FORM_VALUE = {
  name: '',
  comment: '',
  rating: 0,
};

type FormState = {
  name: string;
  comment: string;
  rating: number;
};

type FormAction =
  | { type: 'SET_NAME'; payload: string }
  | { type: 'SET_COMMENT'; payload: string }
  | { type: 'SET_RATING'; payload: number }
  | { type: 'RESET' };

const reducer = (state: FormState, action: FormAction) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_COMMENT':
      return { ...state, comment: action.payload };
    case 'SET_RATING':
      return { ...state, rating: action.payload };
    case 'RESET':
      return DEFAULT_FORM_VALUE;
    default:
      return state;
  }
};

export const ReviewForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  const { name, comment, rating } = form;

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log('form', form);
  };

  const incrementRating = () => {
    if (rating < MAX_COUNT) {
      dispatch({ type: 'SET_RATING', payload: rating + 1 });
    }
  };

  const decrementRating = () => {
    if (rating > MIN_COUNT) {
      dispatch({ type: 'SET_RATING', payload: rating - 1 });
    }
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <div className={s.wrapper}>
        <span>Имя: </span>
        <input type="text" value={name} onChange={(evt) => dispatch({ type: 'SET_NAME', payload: evt.target.value })} />
      </div>
      <div className={s.wrapper}>
        <span>Комментарий: </span>
        <input
          type="text"
          value={comment}
          onChange={(evt) => dispatch({ type: 'SET_COMMENT', payload: evt.target.value })}
        />
      </div>
      <div className={s.wrapper}>
        <span>Рейтинг: </span>
        <Count count={rating} onIncrement={incrementRating} onDecrement={decrementRating} />
      </div>
      <div className={s.buttonWrapper}>
        <button type="submit" className={s.saveButton}>
          Сохранить
        </button>
        <button className={s.clearButton} onClick={() => dispatch({ type: 'RESET' })}>
          Очистить
        </button>
      </div>
    </form>
  );
};
