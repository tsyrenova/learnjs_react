import React, { PropsWithChildren } from 'react';
import s from './Layout.module.css';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={s.container}>
      <header className={s.header}>Header</header>
      <section className={s.content}>{children}</section>
      <footer className={s.footer}>Footer</footer>
    </div>
  );
};
