import IconAlarm from "@/lib/components/@icon/IconAlarm";
import IconArrowRight from "@/lib/components/@icon/IconArrowRight";
import IconNotice from "@/lib/components/@icon/IconNotice";
import IconSearch from "@/lib/components/@icon/IconSearch";
import { Link } from "react-router-dom";
import * as Icon from "./_assets";
import CelebBestSection from "./_components/CelebBestSection";
import CelebritiesRecommendedRestaurantsInformation from "./_components/CelebritiesRecommendedRestaurantsInformation";
import RestaurantRecommendedSection from "./_components/RestaurantRecommendedSection";
import RepresentativeRegionsSection from "./_components/RepresentativeRegionsSection";
import { colors } from "@/lib/colors";
import OnBoarding from "./_components/OnBoarding";

const FOOD_CATEGORY = [
  { name: "한식", icon: <Icon.Korean /> },
  { name: "중식", icon: <Icon.Chinese /> },
  { name: "일식", icon: <Icon.Japanese /> },
  { name: "양식", icon: <Icon.Western /> },
  { name: "패스트푸드", icon: <Icon.FastFood /> },
  { name: "고기", icon: <Icon.MeatDishes /> },
  { name: "국/찌개", icon: <Icon.SoupAndStew /> },
  { name: "면", icon: <Icon.Noodles /> },
  { name: "분식", icon: <Icon.SnackFood /> },
  { name: "세계음식", icon: <Icon.GlobalFood /> },
  { name: "주점", icon: <Icon.PubAndBar /> },
  { name: "커피/디저트", icon: <Icon.Desserts /> },
];

const MainPage = () => {
  return (
    <>
      <OnBoarding />
      <main>
        <section className="flex items-center gap-16 px-20 pt-20">
          <Link
            to="/search"
            className="flex h-48 w-full items-center gap-10 rounded-[12px] bg-gray-100 pl-14 shadow-sm"
          >
            <IconSearch />
            <span className="text-gray-400 body-15-rg">
              원하는 식당을 검색해보세요.
            </span>
          </Link>
          <IconAlarm fill={colors.gray[800]} width={24} height={24} />
        </section>
        <CelebBestSection />
        <section className="mt-48">
          <div className="flex gap-2">
            <h1 className="pl-20 title-20-md">셀럽들의 추천 맛집</h1>
            <CelebritiesRecommendedRestaurantsInformation />
          </div>
          <RestaurantRecommendedSection />
        </section>
        <section className="mt-48 px-20">
          <Link
            to="/restaurants/weekly"
            className="flex h-48 w-full items-center justify-between rounded-[8px] bg-gray-800 px-16 py-12"
          >
            <div className="flex items-center">
              <IconNotice fill={colors.main[600]} />
              <span className="ml-12 text-white title-15-md">
                이번 주 업데이트 된 맛집 확인하러 가기
              </span>
            </div>
            <IconArrowRight
              width={20}
              height={20}
              fill={colors.white.DEFAULT}
            />
          </Link>
        </section>
        <section className="mt-48">
          <h1 className="px-20 title-20-md">무엇을 드시나요?</h1>
          <div className="mt-16 gap-y-16 px-20 food-category">
            {FOOD_CATEGORY.map(({ name, icon }) => (
              <Link
                to={`/restaurants/category?category=${name}`}
                className="flex flex-col items-center"
                key={name}
              >
                <div
                  className="flex h-56 w-56 items-center justify-center rounded-[16px] bg-gray-100"
                  key={name}
                >
                  {icon}
                </div>
                <span className="mt-8 body-13-rg">{name}</span>
              </Link>
            ))}
          </div>
        </section>
        <RepresentativeRegionsSection />
        <section className="mt-48">
          <h1 className="px-20 title-20-md">지금 인기 있는 맛집!</h1>
          <RestaurantRecommendedSection />
        </section>
        <div className="h-16" />
      </main>
    </>
  );
};

export default MainPage;
