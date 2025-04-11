import { FC, PropsWithChildren } from 'react';
import s from './Tabs.module.css';

export const Tabs: FC<PropsWithChildren> = ({ children }) => {
  return <div className={s.tabs}>{children}</div>;
};
