import { useMutation, useSuspenseQuery } from "@tanstack/react-query";

import {
  getCelebrityInfo,
  postInterestedCelebrity,
  deleteInterestedCelebrity,
  getInterestedCelebrities,
  getCelebritiesInRestaurants,
} from "@/remotes/celebs";

// 셀럽 정보 조회
export const useCelebrityQuery = (celebrityId: number) =>
  useSuspenseQuery({
    queryKey: ["getCelebrityInfo", celebrityId],
    queryFn: () => getCelebrityInfo(celebrityId),
  });

// 관심 셀럽 추가
export const useInterestedCelebrityMutation = () =>
  useMutation({
    mutationFn: postInterestedCelebrity,
  });

// 관심 셀럽 삭제
export const useDeleteInterestedCelebrityMutation = () =>
  useMutation({
    mutationFn: deleteInterestedCelebrity,
  });

// 관심 셀럽 조회
export const useInterestedCelebritiesQuery = () =>
  useSuspenseQuery({
    queryKey: ["getInterestedCelebrities"],
    queryFn: getInterestedCelebrities,
  });

// 필터용 셀럽 조회
export const useCelebritiesInRestaurantsQuery = (
  params: Parameters<typeof getCelebritiesInRestaurants>[0]
) =>
  useSuspenseQuery({
    queryKey: ["getCelebritiesInRestaurants", params],
    queryFn: () => getCelebritiesInRestaurants(params),
  });
