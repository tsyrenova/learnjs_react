import { FC, PropsWithChildren, useState } from 'react';
import { ThemeContext as ThemeContextProvider } from '.';
import { Theme } from '../../type';

export const ThemeContext: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return <ThemeContextProvider value={{ theme, toggleTheme }}>{children}</ThemeContextProvider>;
};
