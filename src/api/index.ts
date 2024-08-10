export * from './login.api';

import { Celeb, RestaurantData } from '@/@types';

export const getCelebs = async (): Promise<Celeb[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/celebs`);

  return await response.json();
};

export const getCelebsRecommendations = async (): Promise<RestaurantData[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/main-page/recommendation`);

  return await response.json();
};

export const getCelebsRestaurants = async (celebId: number): Promise<{ content: RestaurantData[] }> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/restaurants?lowLatitude=32&highLatitude=40&lowLongitude=120&highLongitude=132&sort=like&celebId=${celebId}&page=0`,
  );

  return await response.json();
};

export const getCelebProfiles = async (): Promise<Celeb[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/celebs`);

  return await response.json();
};