import { GameQuery } from "../App"
import useData from "./useData"

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  background_image: string;
  id: number;
  metacritic: number,
  name: string;
  parent_platforms: { platform: Platform }[]
}

const useGames = (gameQuery: GameQuery) => useData<Game>('/games', {
  params: {
    genres: gameQuery.genre?.id,
    plarforms: gameQuery.platform?.id,
    ordering : gameQuery.sortOrder,
  }},
  [gameQuery]
)

export default useGames
