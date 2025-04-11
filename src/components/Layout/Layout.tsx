import { PropsWithChildren, FC } from 'react';
import s from './Layout.module.css';
import { ToggleTheme } from '../ToggleTheme';
import { Auth } from '../Auth';
import { CartContainer } from '../CartContainer';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={s.container}>
      <header className={s.header}>
        <ToggleTheme />
        <Auth />
      </header>
      <section className={s.content}>{children}</section>
      <CartContainer />
      <footer className={s.footer}>Footer</footer>
    </div>
  );
};
