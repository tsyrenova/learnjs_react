import { FC, PropsWithChildren, useState } from 'react';
import { AuthContext as AuthContextProvider } from '.';
import { User } from '../../type';

export const AuthContext: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const toggleAuthorize = () => {
    if (user) {
      setUser(null);
    } else {
      setUser({ name: 'Test' });
    }
  };

  return <AuthContextProvider value={{ user, toggleAuthorize }}>{children}</AuthContextProvider>;
};
