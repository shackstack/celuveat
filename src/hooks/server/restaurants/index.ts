import {
  useInfiniteQuery,
  useMutation,
  useSuspenseInfiniteQuery,
  useSuspenseQuery,
} from "@tanstack/react-query";

import {
  getRestaurants,
  getRestaurantsCount,
  getCelebritiesBest,
  getRecommendedRestaurantsByCelebrities,
  getInterestedRestaurants,
  getInterestedRestaurantsCount,
  getCelebrityRestaurantsCount,
  postInterestedRestaurant,
  deleteInterestedRestaurant,
  getRestaurant,
  getRestaurantVideos,
  getRestaurantsNearby,
  getWeeklyRestaurants,
  getWeeklyRestaurantsCount,
} from "@/remotes/restaurants";

// 음식점 조건 조회
export const useRestaurantsQuery = (
  params: Parameters<typeof getRestaurants>[0]
) =>
  useInfiniteQuery({
    queryKey: [
      "getRestaurants",
      params.highLatitude,
      params.lowLatitude,
      params.highLongitude,
      params.lowLongitude,
      params.category,
      params.celebrityId,
      params.sort,
      params.region,
    ],
    queryFn: ({ pageParam }) =>
      getRestaurants({ page: pageParam, size: 10, ...params }),
    getNextPageParam: (lastPage, _, lastPageNumber) =>
      lastPage.hasNext ? lastPageNumber + 1 : undefined,
    initialPageParam: 0,
  });

// 음식점 갯수 조회
export const useRestaurantsCountQuery = (
  params: Parameters<typeof getRestaurantsCount>[0]
) =>
  useSuspenseQuery({
    queryKey: [
      "getRestaurantsCount",
      params.highLatitude,
      params.lowLatitude,
      params.highLongitude,
      params.lowLongitude,
      params.category,
      params.celebrityId,
      params.region,
    ],
    queryFn: () => getRestaurantsCount(params),
  });

// 인기 셀럽 조회
export const useCelebritiesBestQuery = () =>
  useSuspenseQuery({
    queryKey: ["getCelebritiesBest"],
    queryFn: getCelebritiesBest,
  });

// 셀럽 추천 음식점 조회
export const useRecommendedRestaurantsByCelebritiesQuery = () =>
  useSuspenseQuery({
    queryKey: ["getRecommendedRestaurantsByCelebrities"],
    queryFn: getRecommendedRestaurantsByCelebrities,
  });

// 관심 음식점 조회
export const useInterestedRestaurantsQuery = () =>
  useSuspenseQuery({
    queryKey: ["getInterestedRestaurants"],
    queryFn: getInterestedRestaurants,
  });

// 관심 음식점 갯수 조회
export const useInterestedRestaurantsCountQuery = () =>
  useSuspenseQuery({
    queryKey: ["getInterestedRestaurantsCount"],
    queryFn: getInterestedRestaurantsCount,
  });

// 셀럽이 다녀간 음식점 갯수 조회
export const useCelebrityRestaurantsCountQuery = (celebrityId: number) =>
  useSuspenseQuery({
    queryKey: ["getCelebrityRestaurantsCount", celebrityId],
    queryFn: () => getCelebrityRestaurantsCount(celebrityId),
  });

// 관심 음식점 추가
export const useInterestedRestaurantMutation = () =>
  useMutation({
    mutationFn: postInterestedRestaurant,
  });

// 관심 음식점 삭제
export const useDeleteInterestedRestaurantMutation = () =>
  useMutation({
    mutationFn: deleteInterestedRestaurant,
  });

// 음식점 조회
export const useRestaurantQuery = (restaurantId: number) =>
  useSuspenseQuery({
    queryKey: ["getRestaurant", restaurantId],
    queryFn: () => getRestaurant(restaurantId),
  });

// 음식점이 나온 영상 조회
export const useRestaurantVideosQuery = (restaurantId: number) =>
  useSuspenseQuery({
    queryKey: ["getRestaurantVideos", restaurantId],
    queryFn: () => getRestaurantVideos(restaurantId),
  });

// 주변 음식점 조회
export const useRestaurantsNearbyQuery = (restaurantId: number) =>
  useSuspenseQuery({
    queryKey: ["getRestaurantsNearby", restaurantId],
    queryFn: () => getRestaurantsNearby(restaurantId),
  });

// 주간 업데이트된 음식점 조회
export const useWeeklyRestaurantsQuery = () =>
  useSuspenseInfiniteQuery({
    queryKey: ["getWeeklyRestaurants"],
    queryFn: getWeeklyRestaurants,
    getNextPageParam: (lastPage, _, lastPageNumber) =>
      lastPage.hasNext ? lastPageNumber + 1 : undefined,
    initialPageParam: 0,
  });

// 주간 음식점 갯수 조회
export const useWeeklyRestaurantsCountQuery = () =>
  useSuspenseQuery({
    queryKey: ["getWeeklyRestaurantsCount"],
    queryFn: getWeeklyRestaurantsCount,
  });
