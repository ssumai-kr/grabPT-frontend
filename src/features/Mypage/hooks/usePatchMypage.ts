import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchMyPage, type MyPagePatchPayload } from '../apis/patchMypage';

export const USER_INFO_QUERY_KEY = ['userInfo'] as const;

export const usePatchMyPage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: MyPagePatchPayload) => patchMyPage(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: USER_INFO_QUERY_KEY });
    },
  });
};
