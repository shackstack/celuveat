import { ChangeEvent, useCallback, useState } from "react";

import {
  useCelebrityRestaurantsCountQuery,
  useRestaurantsQuery,
} from "@/hooks/server/restaurants";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import RestaurantCardRow from "@/components/RestaurantCardRow";
import Spacing from "@/lib/components/Spacing";

interface CelebRestaurantSectionsProps {
  celebrityId: number;
}

function CelebRestaurantSections({
  celebrityId,
}: CelebRestaurantSectionsProps) {
  const { data: celebrityRestaurantsCount } =
    useCelebrityRestaurantsCountQuery(celebrityId);

  const [sortValue, setSortValue] = useState("like");
  const { data, fetchNextPage } = useRestaurantsQuery({ celebrityId });

  const ref = useInfiniteScroll({
    eventHandler: fetchNextPage,
  });

  const handleSortValueChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setSortValue(e.target.value);
    },
    []
  );

  return (
    <>
      <div className="mt-28 flex justify-between">
        <h2 className="title-20-md">
          <span className="text-main-700">{celebrityRestaurantsCount}</span>개
          매장
        </h2>
        <select
          className="title-15-md"
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

export default CelebRestaurantSections;
