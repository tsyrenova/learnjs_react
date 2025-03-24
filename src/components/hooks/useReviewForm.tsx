import { useReducer } from 'react';
import { ACTION, DEFAULT_FORM_VALUE } from '../ReviewForm/constants';

export type FormState = {
  name: string;
  comment: string;
  rating: number;
};

export type FormAction =
  | { type: ACTION.SET_NAME; payload: string }
  | { type: ACTION.SET_COMMENT; payload: string }
  | { type: ACTION.SET_RATING; payload: number }
  | { type: ACTION.RESET };

const reducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case ACTION.SET_NAME:
      return { ...state, name: action.payload };
    case ACTION.SET_COMMENT:
      return { ...state, comment: action.payload };
    case ACTION.SET_RATING:
      return { ...state, rating: action.payload };
    case ACTION.RESET:
      return DEFAULT_FORM_VALUE;
    default:
      return state;
  }
};

export const useReviewForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  return { form, dispatch };
};
