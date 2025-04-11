import cx from 'classnames';
import s from './Button.module.css';
import { FC, use } from 'react';
import { ThemeContext } from '../ThemeContext';

type Props = {
  title: string;
  disabled?: boolean;
  onClick?: () => void;
  colorViewVariant?: 'default' | 'active';
  className?: string;
};

export const Button: FC<Props> = ({ title, disabled, onClick, colorViewVariant = 'default', className }) => {
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
      {title}
    </button>
  );
};
