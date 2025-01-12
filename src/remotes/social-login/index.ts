import { SocialLoginType } from '@/@types';
import { api } from '@/utils/api';

export const deleteAccount = async (socialLoginType: SocialLoginType): Promise<void> => {
  return await api.delete(`/social-login/withdraw/${socialLoginType}`);
};
