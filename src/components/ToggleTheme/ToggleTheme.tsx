import { FC, use } from 'react';
import { ThemeContextType } from '../../type';
import { ThemeContext } from '../ThemeContext';
import { Button } from '../Button';

export const ToggleTheme: FC = () => {
  const { theme, toggleTheme } = use<ThemeContextType>(ThemeContext);

  return <Button onClick={toggleTheme}>{theme === 'light' ? 'switch to dark' : 'switch to light'}</Button>;
};
