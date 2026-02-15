import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { useInternetIdentity } from './useInternetIdentity';
import { ExternalBlob } from '../backend';

export function usePostersQuery() {
  const { actor, isFetching: actorFetching } = useActor();
  const { identity } = useInternetIdentity();

  const isAuthenticated = !!identity;

  return useQuery<ExternalBlob[]>({
    queryKey: ['posters'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getPosters();
    },
    enabled: !!actor && !actorFetching && isAuthenticated,
    retry: false,
  });
}

export function useUploadPosterMutation() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (file: File) => {
      if (!actor) throw new Error('Actor not available');
      
      const arrayBuffer = await file.arrayBuffer();
      const bytes = new Uint8Array(arrayBuffer);
      const blob = ExternalBlob.fromBytes(bytes);
      
      return actor.uploadPoster(blob);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posters'] });
    },
  });
}
