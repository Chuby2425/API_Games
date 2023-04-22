export interface Platform{
}

export interface Store{
}

export interface Rating{
}

export interface AddedByStatus{
}

export interface Tag{
}

export interface EsrbRating{
}

export interface Color{
}

export interface ShortScreenshot{
}

export interface Game {
  slug: string;
  name: string;
  playtime: number;
  platforms: Platform[];
  stores: Store[];
  released: Date;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: Rating[];
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status: AddedByStatus;
  metacritic: number;
  suggestions_count: number;
  updated: Date;
  id: number;
  score: null;
  clip: null;
  tags: Tag[];
  esrb_rating: EsrbRating;
  user_game: null;
  reviews_count: number;
  saturated_color: Color;
  dominant_color: Color;
  short_screenshots: ShortScreenshot[];
  parent_platforms: Platform[];
  genres: Genre[];
}

export interface Result {
  count: number;
  next: null;
  previous: null;
  results: Genre[];
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  games: GameElement[];
}

export interface GameElement {
  id: number;
  slug: string;
  name: string;
  added: number;
}

export interface GamesByGenre {
  count: number;
  next: string;
  previous: null;
  results: Result[];
  user_platforms: boolean;
}
