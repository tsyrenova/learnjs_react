import React from 'react';
import s from './Tabs.module.css';

type Tab = {
  id: string;
  name: string;
};

type TabsProps = {
  tabs: Tab[];
  activeTab: string;
  //   TODO добавить правила для ts в конфиг eslint
  // eslint-disable-next-line no-unused-vars
  setActiveTab: (tabId: string) => void;
};

export const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <>
      <div className={s.tabs}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${s.tab} ${activeTab === tab.id ? s.activeTab : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.name}
          </div>
        ))}
      </div>
    </>
  );
};
