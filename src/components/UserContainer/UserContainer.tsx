import { FC } from 'react';

import { User } from '../UserReview';

type Props = {
  id: string;
};

export const UserContainer: FC<Props> = ({ id }) => {
  return <User id={id} />;
};
