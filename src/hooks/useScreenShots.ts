import { useQuery } from '@tanstack/react-query';
import { ScreenShot } from '../entities/Screenshot';
import APIClient from '../services/api-client';
import ms from 'ms';

const useScreenShots = (gameId: number) => {
  const apiClient = new APIClient<ScreenShot>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ['screenshots', gameId],
    queryFn: () => apiClient.getAll(),
    staleTime: ms('24h'),
  });
};

export default useScreenShots;
