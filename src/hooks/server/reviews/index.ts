import {
  useSuspenseInfiniteQuery,
  useMutation,
  useSuspenseQuery,
} from "@tanstack/react-query";

import {
  getReview,
  deleteReview,
  postReviewHelpful,
  deleteReviewHelpful,
  getRestaurantReviews,
  getReviewCount,
} from "@/remotes/reviews";

// 리뷰 조회
export const useReviewQuery = (reviewId: number) =>
  useSuspenseQuery({
    queryKey: ["getReview", reviewId],
    queryFn: () => getReview(reviewId),
  });

// 리뷰 삭제
export const useDeleteReviewMutation = () =>
  useMutation({ mutationFn: deleteReview });

// 리뷰 좋아요
export const usePostReviewHelpfulMutation = () =>
  useMutation({ mutationFn: postReviewHelpful });

// 리뷰 좋아요 취소
export const useDeleteReviewHelpfulMutation = () =>
  useMutation({ mutationFn: deleteReviewHelpful });

// 음식점 리뷰 조회
export const useRestaurantReviewsQuery = (
  restaurantId: number,
  options: Parameters<typeof getRestaurantReviews>[1]
) =>
  useSuspenseInfiniteQuery({
    queryKey: ["getRestaurantReviews", restaurantId, options],
    queryFn: ({ pageParam }) =>
      getRestaurantReviews(restaurantId, { page: pageParam, size: 10 }),
    getNextPageParam: (lastPage, _, lastPageNumber) =>
      lastPage.hasNext ? lastPageNumber + 1 : undefined,
    initialPageParam: 0,
  });

// 리뷰 갯수 조회
export const useReviewCountQuery = (restaurantId: number) =>
  useSuspenseQuery({
    queryKey: ["getReviewCount", restaurantId],
    queryFn: () => getReviewCount(restaurantId),
  });
