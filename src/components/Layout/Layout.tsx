import React, { ReactNode } from 'react';
import s from './Layout.module.css';

type LayoutProps = {
  children: ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={s.container}>
      <header className={s.header}>Header</header>
      <section className={s.content}>{children}</section>
      <footer className={s.footer}>Footer</footer>
    </div>
  );
};
