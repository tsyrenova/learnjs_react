import { useState } from 'react';
import { Restaurant } from '../Restaurant';
import { Tabs } from '../Tabs';
import { restaurants } from '../../mock';

export const RestaurantsPage = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState<string>(restaurants[0].id);

  return (
    <>
      <Tabs
        tabs={restaurants.map((restaurant) => {
          return { id: restaurant.id, name: restaurant.name };
        })}
        activeTab={activeRestaurantId}
        setActiveTab={(tabId) => setActiveRestaurantId(tabId)}
      />
      <Restaurant restaurant={restaurants.find((restaurant) => restaurant.id === activeRestaurantId)} />
    </>
  );
};
