import { PagedResponse, PageOptions } from '@/@types/util';
import { api } from '@/utils/api';

interface Writer {
  id: number;
  nickname: string;
  profileImageUrl: string;
}

export interface Review {
  id: number;
  restaurantId: number;
  writer: Writer;
  content: string;
  star: 0 | 1 | 2 | 3 | 4 | 5;
  views: number;
  helps: number;
  clickedHelpful: boolean;
  images: string[];
  createdAt: string;
  updatedAt: string;
}

// 리뷰 조회
export const getReview = async (reviewId: number): Promise<Review> => {
  return await api.get(`/reviews/${reviewId}`);
};

// 리뷰 삭제
export const deleteReview = async (reviewId: number): Promise<void> => {
  await api.delete(`/reviews/${reviewId}`);
};

// 리뷰 좋아요
export const postReviewHelpful = async (reviewId: number): Promise<void> => {
  await api.post(`/reviews/helpful/${reviewId}`);
};

// 리뷰 좋아요 취소
export const deleteReviewHelpful = async (reviewId: number): Promise<void> => {
  await api.delete(`/reviews/helpful/${reviewId}`);
};

// 음식점 리뷰 조회
export const getRestaurantReviews = async (
  restaurantId: number,
  params: PageOptions = {},
): Promise<PagedResponse<Review>> => {
  return await api.get(`/reviews/restaurants/${restaurantId}`, { params });
};

// 리뷰 갯수 조회
export const getReviewCount = async (restaurantId: number): Promise<number> => {
  return await api.get(`/reviews/restaurants/${restaurantId}/count`);
};
