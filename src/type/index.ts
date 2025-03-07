export type Restaurant = {
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
