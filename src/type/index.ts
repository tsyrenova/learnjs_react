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

export type NormalizedRestaurantType = {
  id: string;
  name: string;
  menu: string[];
  reviews: string[];
};

export type NormalizedDishType = {
  id: string;
  name: string;
  price: number;
  ingredients: string[];
};

export type NormalizedReviewType = {
  id: string;
  userId: string;
  text: string;
  rating: number;
};

export type NormalizedUserType = {
  id: string;
  name: string;
};

export type RestaurantState = {
  entities: Record<string, NormalizedRestaurantType>;
  ids: string[];
};

export type DishState = {
  entities: Record<string, NormalizedDishType>;
  ids: string[];
};

export type ReviewState = {
  entities: Record<string, NormalizedReviewType>;
  ids: string[];
};

export type UserState = {
  entities: Record<string, NormalizedUserType>;
  ids: string[];
};

export type RootState = {
  restaurantsSlice: RestaurantState;
  dishesSlice: DishState;
  reviewsSlice: ReviewState;
  usersSlice: UserState;
};
