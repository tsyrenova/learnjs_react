import { Provider } from 'react-redux';
import './App.css';
import { AuthContext } from './components/AuthContext/AuthContext';
import { Layout } from './components/Layout';
import { RestaurantsPage } from './components/RestaurantsPage';
import { ThemeContext } from './components/ThemeContext/ThemeContext';
import { store } from './components/redux/store';

function App() {
  return (
    <Provider store={store}>
      <AuthContext>
        <ThemeContext>
          <Layout>
            <RestaurantsPage />
          </Layout>
        </ThemeContext>
      </AuthContext>
    </Provider>
  );
}

export default App;
