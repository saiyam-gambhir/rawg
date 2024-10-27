import Genre from './Genre';
import Platform from './Platform';
import Publisher from './Publisher';

export default interface Game {
  background_image: string;
  description_raw: string;
  genres: Genre[];
  id: number;
  metacritic: number;
  name: string;
  parent_platforms: { platform: Platform }[];
  slug: string;
  publishers: Publisher[];
}
