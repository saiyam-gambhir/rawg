import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App"
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

export interface Game {
  background_image: string;
  id: number;
  metacritic: number,
  name: string;
  parent_platforms: { platform: Platform }[]
}

const apiClient = new APIClient<Game>('/games');

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery], // gameQuery is the object to watch for changes
    queryFn: ({ pageParam = 1}) => apiClient.getAll({
      params: {
        genres: gameQuery.genre?.id,
        ordering : gameQuery.sortOrder,
        parent_plarforms: gameQuery.platform?.id,
        search: gameQuery.searchText,
        page: pageParam,
      },
    }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.count ? allPages.length + 1 : undefined
    },
    staleTime: 24 * 60 * 60 * 1000 //24h
  })

export default useGames
