import { FC } from 'react';
import s from './Tabs.module.css';
import cx from 'classnames';

type Tab = {
  id: string;
  name: string;
};

type Props = {
  tabs: Tab[];
  activeTab: string;
  //   TODO добавить правила для ts в конфиг eslint
  // eslint-disable-next-line no-unused-vars
  setActiveTab: (tabId: string) => void;
};

export const Tabs: FC<Props> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <>
      <div className={s.tabs}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={cx(s.tab, { [s.activeTab]: activeTab === tab.id })}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.name}
          </div>
        ))}
      </div>
    </>
  );
};
