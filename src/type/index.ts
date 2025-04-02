export type RestaurantType = {
  id: string;
  name: string;
  menu: Menu[];
  reviews: Review[];
};

export type Menu = {
  id: string;
  name: string;
  price: number;
  ingredients: string[];
};

export type Review = {
  id: string;
  user: string;
  text: string;
  rating: number;
};

export type DishType = {
  id: string;
  name: string;
  price: number;
  ingredients: string[];
};

export type Theme = 'light' | 'dark';

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export type User = {
  name: string;
};

export type AuthContextType = {
  user: User | null;
  toggleAuthorize: () => void;
};
