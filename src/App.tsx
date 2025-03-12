import './App.css';
import { restaurants } from './mock';
import { Menu } from './components/Menu';
import { Reviews } from './components/Rewievs';

function App() {
  return (
    <div className="wrapper">
      {restaurants.map((restaurant) => {
        const { name, menu, reviews } = restaurant;
        return (
          <div key={restaurant.id}>
            <h2>{name}</h2>
            <Menu menu={menu} />
            <Reviews reviews={reviews} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
