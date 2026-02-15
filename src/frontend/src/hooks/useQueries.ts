import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { ExternalBlob, type UserProfile } from '../backend';

// User Profile Queries
export function useGetCallerUserProfile() {
  const { actor, isFetching: actorFetching } = useActor();

  const query = useQuery<UserProfile | null>({
    queryKey: ['currentUserProfile'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getCallerUserProfile();
    },
    enabled: !!actor && !actorFetching,
    retry: false,
  });

  return {
    ...query,
    isLoading: actorFetching || query.isLoading,
    isFetched: !!actor && query.isFetched,
  };
}

export function useSaveCallerUserProfile() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (profile: UserProfile) => {
      if (!actor) throw new Error('Actor not available');
      return actor.saveCallerUserProfile(profile);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentUserProfile'] });
    },
  });
}

// Poster Queries
export function useGetPoster() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<ExternalBlob | null>({
    queryKey: ['poster'],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getPoster();
    },
    enabled: !!actor && !actorFetching,
    retry: false,
  });
}

export function useUploadPoster() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ blob, onProgress }: { blob: ExternalBlob; onProgress?: (percentage: number) => void }) => {
      if (!actor) throw new Error('Actor not available');
      const blobWithProgress = onProgress ? blob.withUploadProgress(onProgress) : blob;
      return actor.uploadPoster(blobWithProgress);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['poster'] });
    },
  });
}
