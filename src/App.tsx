import { useState } from 'react';
import './App.css';
import { Layout } from './components/Layout';
import { Tabs } from './components/Tabs';
import { restaurants } from './mock';
import { Restaurant } from './components/Restaurant';

function App() {
  const [activeTab, setActiveTab] = useState<string>(restaurants[0].id);

  return (
    <Layout>
      <Tabs
        tabs={restaurants.map((restaurant) => {
          return { id: restaurant.id, name: restaurant.name };
        })}
        activeTab={activeTab}
        setActiveTab={(tabId) => setActiveTab(tabId)}
      />
      <Restaurant restaurant={restaurants.find((restaurant) => restaurant.id === activeTab)} />
    </Layout>
  );
}

export default App;
