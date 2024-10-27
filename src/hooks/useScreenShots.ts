import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import ms from 'ms';
import ScreenShot from '../entities/Screenshot';

const useScreenShots = (gameId: number) => {
  const apiClient = new APIClient<ScreenShot>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ['screenshots', gameId],
    queryFn: () => apiClient.getAll(),
    staleTime: ms('24h'),
  });
};

export default useScreenShots;
