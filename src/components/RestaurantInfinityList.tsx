import { ChangeEvent, useCallback, useState } from "react";

import RestaurantCardRow from "@/components/RestaurantCardRow";
import {
  useRestaurantsCountQuery,
  useRestaurantsQuery,
} from "@/hooks/server/restaurants";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { useSearchParams } from "react-router-dom";
import Spacing from "@/lib/components/Spacing";

function RestaurantSection() {
  const [sortValue, setSortValue] = useState("like");
  const [searchParams] = useSearchParams();
  const { data: restaurantsCount } = useRestaurantsCountQuery({
    category: searchParams.get("category") ?? undefined,
    celebrityId: Number(searchParams.get("celebrityId")) || undefined,
  });
  const { data, fetchNextPage } = useRestaurantsQuery({
    category: searchParams.get("category") ?? undefined,
    celebrityId: Number(searchParams.get("celebrityId")) || undefined,
  });

  const ref = useInfiniteScroll({
    eventHandler: fetchNextPage,
    observerOptions: { threshold: 1 },
  });

  const handleSortValueChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setSortValue(e.target.value);
    },
    []
  );

  return (
    <>
      <div className="mt-20 flex justify-between">
        <h2 className="title-20-md">
          <span className="text-main-700 title-20-bold">
            {restaurantsCount}
          </span>
          개 맛집
        </h2>
        <select
          className="body-13-rg"
          defaultValue={sortValue}
          onChange={handleSortValueChange}
        >
          <option value="createdAt">최신순</option>
          <option value="review">리뷰순</option>
          <option value="like">좋아요순</option>
        </select>
      </div>
      <Spacing size={16} />
      <ul className="flex flex-1 overflow-scroll w-full flex-col gap-24 ">
        {data?.pages.map(({ contents }) =>
          contents.map((props) => (
            <RestaurantCardRow key={props.id} {...props} />
          ))
        )}
        <div ref={ref} />
      </ul>
    </>
  );
}

export default RestaurantSection;
