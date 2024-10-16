import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App"
import { FetchResponse } from "../services/api-client";
import apiClient from "../services/api-client";
import { Platform } from "./usePlatforms";

export interface Game {
  background_image: string;
  id: number;
  metacritic: number,
  name: string;
  parent_platforms: { platform: Platform }[]
}

const useGames = (gameQuery: GameQuery) => useQuery<FetchResponse<Game>, Error>({
  queryKey: ['games', gameQuery], // gameQuery is the object to watch for changes
  queryFn: () => apiClient.get<FetchResponse<Game>>('/games', {
    params: {
      genres: gameQuery.genre?.id,
      ordering : gameQuery.sortOrder,
      parent_plarforms: gameQuery.platform?.id,
      search: gameQuery.searchText,
    },
  }).then(res => res.data)
})

export default useGames
