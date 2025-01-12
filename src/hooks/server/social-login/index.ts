import { useMutation } from "@tanstack/react-query";

import { deleteAccount } from "@/remotes/social-login";

// 소셜 로그인 탈퇴
export const useDeleteAccountMutation = () =>
  useMutation({
    mutationFn: deleteAccount,
  });
