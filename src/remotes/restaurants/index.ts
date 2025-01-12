import { Celebrity, Restaurant } from '@/@types';
import { CoordinateOption, FilterOption, PagedResponse, PaginationOption } from '@/@types/util';
import { api } from '@/utils/api';

// 음식점 조건 조회
export const getRestaurants = async (
  params: FilterOption & PaginationOption & (CoordinateOption | {}) & { celebrityId?: number },
): Promise<PagedResponse<Restaurant>> => {
  return await api.get('/restaurants', { params });
};

// 음식점 갯수 조회
export const getRestaurantsCount = async (
  params: FilterOption & (CoordinateOption | {}) & { celebrityId?: number },
): Promise<number> => {
  return await api.get('/restaurants/count', { params });
};

// 인기 셀럽 조회
export const getCelebritiesBest = async (): Promise<
  {
    celebrity: Celebrity;
    restaurants: Restaurant[];
  }[]
> => {
  return await api.get('/celebrities/best');
};

// 셀럽 추천 음식점 조회
export const getRecommendedRestaurantsByCelebrities = async (): Promise<Restaurant[]> => {
  return await api.get('/restaurants/celebrity/recommend');
};

// 관심 음식점 조회
export const getInterestedRestaurants = async (): Promise<PagedResponse<Restaurant>> => {
  return await api.get('/restaurants/interested');
};

// 관심 음식점 갯수 조회
export const getInterestedRestaurantsCount = async (): Promise<number> => {
  return await api.get('/restaurants/interested/count');
};

// 셀럽이 다녀간 음식점 갯수 조회
export const getCelebrityRestaurantsCount = async (celebrityId: number): Promise<number> => {
  return await api.get(`/restaurants/celebrity/${celebrityId}/count`);
};

// 관심 음식점 추가
export const postInterestedRestaurant = async (restaurantId: number) => {
  await api.post(`/restaurants/interested/${restaurantId}`);
};

// 관심 음식점 삭제
export const deleteInterestedRestaurant = async (restaurantId: number) => {
  await api.delete(`/restaurants/interested/${restaurantId}`);
};

// 음식점 조회
export const getRestaurant = async (restaurantId: number): Promise<Restaurant> => {
  return await api.get(`/restaurants/${restaurantId}`);
};

// 음식점이 나온 영상 조회
export const getRestaurantVideos = async (
  restaurantId: number,
): Promise<
  {
    id: number;
    videoUrl: string;
    celebrities: Celebrity[];
  }[]
> => {
  return await api.get(`/videos/in/restaurants/${restaurantId}`);
};

// 주변 음식점 조회
export const getRestaurantsNearby = async (restaurantId: number): Promise<Restaurant[]> => {
  return await api.get(`/restaurants/nearby/${restaurantId}`);
};

// 주간 업데이트된 음식점 조회
export const getWeeklyRestaurants = async (): Promise<PagedResponse<Restaurant>> => {
  return await api.get('/restaurants/weekly');
};

// 주간 음식점 갯수 조회
export const getWeeklyRestaurantsCount = async (): Promise<number> => {
  return await api.get('/restaurants/weekly/count');
};
