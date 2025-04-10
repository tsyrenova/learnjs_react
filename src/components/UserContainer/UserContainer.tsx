import { FC } from 'react';
import { RootState } from '../../type';
import { useSelector } from 'react-redux';
import { User } from '../UserReview';
import { selectUserById } from '../redux/entities/users/slise';
import { selectReviewById } from '../redux/entities/reviews/slise';

type Props = {
  id: string;
};

export const UserContainer: FC<Props> = ({ id }) => {
  const review = useSelector((state: RootState) => selectReviewById(state, id));
  const user = useSelector((state: RootState) => selectUserById(state, review.userId));

  if (!user && !review) {
    return null;
  }

  const { rating, text } = review;
  const { name } = user;

  return <User rating={rating} text={text} name={name} />;
};
