import Header from "@/components/Header";
import RestaurantCardRow from "@/components/RestaurantCardRow";
import {
  useWeeklyRestaurantsCountQuery,
  useWeeklyRestaurantsQuery,
} from "@/hooks/server/restaurants";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";

const WeeklyRestaurantsPage = () => {
  const { data, fetchNextPage } = useWeeklyRestaurantsQuery();
  const { data: restaurantsCount } = useWeeklyRestaurantsCountQuery();

  const ref = useInfiniteScroll({
    eventHandler: fetchNextPage,
    observerOptions: { threshold: 1 },
  });

  return (
    <>
      <Header title="이번 주 업데이트된 맛집" withBack />
      {restaurantsCount ? (
        <main className="px-20">
          <div className="mt-28 flex justify-between">
            <h2 className="title-20-md">
              <span className="text-main-700">{restaurantsCount}</span>개 매장
            </h2>
            <span className="body-13-rg">최신순</span>
          </div>
          <ul className="mt-24 flex flex-col gap-20">
            {data.pages.map((page) =>
              page.contents.map((props) => (
                <RestaurantCardRow key={props.id} {...props} />
              ))
            )}
            <div ref={ref} />
          </ul>
        </main>
      ) : (
        <div>
          <h1 className="text-center mt-72 title-16-sb">
            이번 주 업데이트된 맛집이 없습니다.
          </h1>
        </div>
      )}
    </>
  );
};

export default WeeklyRestaurantsPage;
