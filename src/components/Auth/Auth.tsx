import { use } from 'react';
import { Button } from '../Button';
import { AuthContextType } from '../../type';
import { AuthContext } from '../AuthContext';
import s from './Auth.module.css';

export const Auth = () => {
  const { user, toggleAuthorize } = use<AuthContextType>(AuthContext);

  return (
    <div className={s.container}>
      {user ? <p>{user.name}</p> : null}
      <Button onClick={toggleAuthorize} title={user?.name ? 'Log out' : 'Log in'} />
    </div>
  );
};
