import { useState } from 'react';
import { Tabs } from '../Tabs';
import { ProgressBar } from '../ProgressBar';
import { useSelector } from 'react-redux';
import { selectRestaurantsIds } from '../../redux/entities/restaurants/slice';
import { TabContainer } from '../TabContainer';
import { RestaurantContainer } from '../RestaurantContainer';

export const RestaurantsPage = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);
  const [activeRestaurantId, setActiveRestaurantId] = useState<string>(restaurantsIds[0]);

  const handleSetActiveRestaurantId = (restaurantId: string) => {
    if (activeRestaurantId === restaurantId) {
      return;
    }
    setActiveRestaurantId(restaurantId);
  };

  return (
    <>
      <Tabs>
        {restaurantsIds.map((restaurantId: string) => (
          <TabContainer
            key={restaurantId}
            id={restaurantId}
            onClick={() => handleSetActiveRestaurantId(restaurantId)}
            disabled={activeRestaurantId === restaurantId}
            isActive={restaurantId === activeRestaurantId}
          />
        ))}
      </Tabs>
      {activeRestaurantId && <RestaurantContainer id={activeRestaurantId} />}
      <ProgressBar />
    </>
  );
};
