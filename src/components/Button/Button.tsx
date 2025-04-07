import cx from 'classnames';
import s from './Button.module.css';
import { FC, ReactNode, use } from 'react';
import { ThemeContext } from '../ThemeContext';

type Props = {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  colorViewVariant?: 'default' | 'active';
  className?: string;
};

export const Button: FC<Props> = ({ children, disabled, onClick, colorViewVariant = 'default', className }) => {
  const { theme } = use(ThemeContext);

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cx(s.button, className, {
        [s.default]: colorViewVariant === 'default',
        [s.active]: colorViewVariant === 'active',
        [s.light]: theme === 'light',
        [s.dark]: theme === 'dark',
      })}
    >
      {children}
    </button>
  );
};
