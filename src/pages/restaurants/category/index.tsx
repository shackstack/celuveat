import CelebrityFilter from "@/components/CelebrityFilter";
import Header from "@/components/Header";
import RestaurantInfinityList from "@/components/RestaurantInfinityList";
import { useSearchParams } from "react-router-dom";

const RestaurantsFilteredByCategoryPage = () => {
  const [searchParams] = useSearchParams();
  return (
    <>
      <Header title={searchParams.get("category")!} withBack />
      <main className="px-20 py-20">
        <CelebrityFilter />
        <RestaurantInfinityList />
      </main>
    </>
  );
};

export default RestaurantsFilteredByCategoryPage;
