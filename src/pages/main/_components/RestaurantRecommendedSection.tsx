"use client";

import RestaurantCard from "@/components/RestaurantCard";
import { useRecommendedRestaurantsByCelebritiesQuery } from "@/hooks/server/restaurants";

function RestaurantRecommendedSection() {
  const { data: restaurants } = useRecommendedRestaurantsByCelebritiesQuery();

  return (
    <div className="scrollbar-hide mt-[16px] flex gap-[16px] overflow-x-scroll px-20">
      {restaurants?.map((restaurant) => (
        <RestaurantCard key={restaurant.id} {...restaurant} />
      ))}
    </div>
  );
}

export default RestaurantRecommendedSection;
