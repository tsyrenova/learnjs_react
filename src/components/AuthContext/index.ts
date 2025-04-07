import { createContext } from 'react';
import { AuthContextType } from '../../type';

const initialAuth: AuthContextType = {
  user: null,
  toggleAuthorize: () => {},
};

export const AuthContext = createContext<AuthContextType>(initialAuth);
