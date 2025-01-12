import { Celebrity, CelebrityDetail } from "@/@types";
import { CoordinateOption, FilterOption } from "@/@types/util";
import { api } from "@/utils/api";

// 셀럽 정보 조회
export const getCelebrityInfo = async (
  celebrityId: number
): Promise<CelebrityDetail> => {
  return api.get(`/celebrities/${celebrityId}`);
};

// 관심 셀럽 추가
export const postInterestedCelebrity = async (celebrityId: number) => {
  await api.post(`/celebrities/interested/${celebrityId}`);
};

// 관심 셀럽 삭제
export const deleteInterestedCelebrity = async (celebrityId: number) => {
  await api.delete(`/celebrities/interested/${celebrityId}`);
};

// 관심 셀럽 조회
export const getInterestedCelebrities = async (): Promise<
  CelebrityDetail["celebrity"][]
> => {
  return await api.get("/celebrities/interested");
};

// 필터용 셀럽 조회
export const getCelebritiesInRestaurants = async (
  params: FilterOption & (CoordinateOption | {})
): Promise<Pick<Celebrity, "id" | "name" | "profileImageUrl">[]> => {
  return await api.get(`/celebrities/in/restaurants/condition`, { params });
};
