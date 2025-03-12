import { useState } from 'react';
import './App.css';
import { Layout } from './components/Layout';
import { Tabs } from './components/Tabs';
import { restaurants } from './mock';
import { RestaurantType } from './type';
import { Restaurant } from './components/Restaurant';
import { Menu } from './components/Menu';

function App() {
  const tabs = restaurants.map((restaurant) => {
    return { id: restaurant.id, name: restaurant.name };
  });

  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);
  const [currentRestaurant, setCurrentRestaurant] = useState<RestaurantType>(restaurants[0]);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    const selectedRestaurant = restaurants.find((restaurant) => restaurant.id === tabId);
    setCurrentRestaurant(selectedRestaurant);
  };

  return (
    <Layout>
      <>
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={(tabId) => handleTabClick(tabId)} />
        <Restaurant restaurant={currentRestaurant} />
        <Menu menu={currentRestaurant.menu} />
      </>
    </Layout>
  );
}

export default App;
