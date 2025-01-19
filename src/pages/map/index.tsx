import CelebrityFilter from "@/components/CelebrityFilter";
import NaverMap from "@/components/NaverMap";
import RestaurantCardRow from "@/components/RestaurantCardRow";
import { useCelebritiesInRestaurantsQuery } from "@/hooks/server/celebs";
import {
  useRestaurantsCountQuery,
  useRestaurantsQuery,
} from "@/hooks/server/restaurants";
import useCoordinate from "@/hooks/useCoordinate";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import IconSearch from "@/lib/components/@icon/IconSearch";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const MapPage = () => {
  const { coordinate } = useCoordinate();
  const { data: restaurantsCount } = useRestaurantsCountQuery(coordinate);
  const [searchParams] = useSearchParams();

  const [isList, setIsList] = useState(false);
  const { data, fetchNextPage } = useRestaurantsQuery(coordinate);
  const { data: celebrities } = useCelebritiesInRestaurantsQuery(coordinate);

  const ref = useInfiniteScroll({
    eventHandler: fetchNextPage,
  });

  const handleClickDrawer = () => {
    if (!restaurantsCount) return;
    setIsList(true);
  };

  return (
    <main className="relative">
      <div className="absolute left-0 top-24 z-[1] w-full px-20">
        <Link
          to="/search"
          className={`flex w-full items-center rounded-[10px] px-12 py-14 ${searchParams.get("tab") === "map" ? "bg-white" : "bg-gray-100"}`}
        >
          <IconSearch />
          <p className="ml-10 text-gray-400 body-15-rg">
            원하는 식당을 검색해보세요
          </p>
        </Link>
      </div>
      <NaverMap cn="h-[calc(100vh_-_88px)] w-full" />
      <div
        className={`absolute bottom-0 z-[100] block w-full ${isList ? "h-[calc(100vh-88px)]" : "rounded-t-[16px]"} overflow-hidden bg-white`}
        onClick={handleClickDrawer}
      >
        <div className="flex h-[20px] items-center justify-center">
          <hr className="h-4 w-48 rounded-[8px] bg-gray-200" />
        </div>
        <div className="h-[20px]" />
        <div className="h-[40px]">
          {restaurantsCount > 0 ? (
            <p className="flex justify-center body-16-md">
              주변에
              <span className="ml-4 text-main-700">{restaurantsCount}</span> 개
              맛집이 있어요!
            </p>
          ) : (
            <p className="flex justify-center body-16-md">
              주변에 추천할 맛집이 없습니다.
            </p>
          )}
        </div>
        {isList && celebrities && (
          <div className="px-20">
            <CelebrityFilter />
          </div>
        )}
        {isList && (
          <div className="mt-16 h-[calc(100vh-224px)] overflow-y-scroll pb-8">
            <ul className="flex w-full flex-col gap-24 px-20">
              {data?.pages.map(({ contents }) =>
                contents.map((props) => (
                  <RestaurantCardRow key={props.id} {...props} />
                ))
              )}
              {data?.pages.at(-1)?.hasNext && <div ref={ref} />}
            </ul>
            <button
              type="button"
              className="fixed bottom-[104px] left-[50%] z-[100] -translate-x-[50%] rounded-[100px] bg-gray-900 px-24 py-16 text-white body-15-rg"
              onClick={(e) => {
                e.stopPropagation();
                setIsList(false);
              }}
            >
              지도로 보기
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default MapPage;
