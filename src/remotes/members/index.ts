import { UserProfile } from "@/@types";
import { api } from "@/utils/api";

// 유저 프로필 조회
export const getUserProfile = async (): Promise<UserProfile | null> => {
  try {
    return await api.get("/members/profile");
  } catch (e) {
    if (e.status === 401) {
      return null;
    }
    throw e;
  }
};

// 유저 프로필 수정
export const updateUserProfile = async (data: {
  nickname: string;
  profileImageUrl: string;
}) => {
  return await api.patch("/members/profile", data);
};

export const getIsMember = async (): Promise<{ isMember: false }> => {
  return await api.get("/members/me");
};

export const getLogout = async () => {
  return await api.get("/social-login/logout");
};

export const getToken = async ({
  socialLoginType,
  authCode,
}: {
  socialLoginType: string;
  authCode: string;
}) => {
  return await api.get(`/social-login/${socialLoginType}?authCode=${authCode}`);
};

export const deleteAccount = async () => {
  await api.delete("/social-login/withdraw");
};
