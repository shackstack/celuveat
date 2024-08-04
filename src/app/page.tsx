import RestaurantCard from '@/components/RestaurantCard';

import CelebBestSection from './_client/CelebBestSection';
import { Celeb, RestaurantData } from '@/@types';
import { IconInfo24, IconNoticeFilled24 } from '@/assets/icons';

const getCelebs = async (): Promise<Celeb[]> => (await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/celebs`)).json();

const getCelebsRecommendations = async (): Promise<RestaurantData[]> =>
  (await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/main-page/recommendation`)).json();

export default async function Home() {
  const celebs = await getCelebs();
  const celebsRecommendations = await getCelebsRecommendations();

  return (
    <main className="">
      <section className="px-20 pt-20">
        <div className="h-48 w-full rounded-[12px] border border-gray-200 shadow-sm"></div>
      </section>
      <CelebBestSection celebs={[...celebs].reverse()} />
      <section className="mt-48">
        <div className="flex gap-2">
          <h1 className="pl-20 title-20-md">셀럽들의 추천 맛집</h1>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11.0002" cy="10.9999" r="8.47917" stroke="#E1E2E4" stroke-width="1.375" />
            <path
              d="M11.0002 8.25008C11.5064 8.25008 11.9168 7.83968 11.9168 7.33341C11.9168 6.82715 11.5064 6.41675 11.0002 6.41675C10.4939 6.41675 10.0835 6.82715 10.0835 7.33341C10.0835 7.83968 10.4939 8.25008 11.0002 8.25008Z"
              fill="#909097"
            />
            <path d="M11 10.0833V15.5833" stroke="#909097" stroke-width="1.375" />
          </svg>
        </div>
        <div className="scrollbar-hide mt-[16px] flex gap-[16px] overflow-x-scroll px-20">
          {[...celebsRecommendations].reverse().map(({ id, name, category, images, roadAddress }) => (
            <RestaurantCard
              key={id}
              name={name}
              category={category}
              imageUrl={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/${images[0].name}.webp`}
              location={roadAddress}
              tag="성시경외 3명 추천 맛집"
            />
          ))}
        </div>
      </section>
      <section className="mt-48 px-20">
        <div className="bg-main-600 flex h-48 w-full items-center rounded-[8px] px-16 py-12">
          <IconNoticeFilled24 className="*:fill-sub-yellow" />
          <span className="ml-12 text-white title-15-md">이번 주 업데이트 된 맛집 확인하러 가기</span>
        </div>
      </section>
      <section className="mt-48">
        <h1 className="px-20 title-20-md">무엇을 드시나요?</h1>
        <div className="mt-16 grid grid-cols-5 gap-y-16 px-20">
          <div className="flex flex-col items-center">
            <div className="h-56 w-56 rounded-[16px] bg-gray-100"></div>
            <span className="mt-8 body-13-rg">카테고리</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-56 w-56 rounded-[16px] bg-gray-100"></div>
            <span className="mt-8 body-13-rg">카테고리</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-56 w-56 rounded-[16px] bg-gray-100"></div>
            <span className="mt-8 body-13-rg">카테고리</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-56 w-56 rounded-[16px] bg-gray-100"></div>
            <span className="mt-8 body-13-rg">카테고리</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-56 w-56 rounded-[16px] bg-gray-100"></div>
            <span className="mt-8 body-13-rg">카테고리</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-56 w-56 rounded-[16px] bg-gray-100"></div>
            <span className="mt-8 body-13-rg">카테고리</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-56 w-56 rounded-[16px] bg-gray-100"></div>
            <span className="mt-8 body-13-rg">카테고리</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-56 w-56 rounded-[16px] bg-gray-100"></div>
            <span className="mt-8 body-13-rg">카테고리</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-56 w-56 rounded-[16px] bg-gray-100"></div>
            <span className="mt-8 body-13-rg">카테고리</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-56 w-56 rounded-[16px] bg-gray-100"></div>
            <span className="mt-8 body-13-rg">카테고리</span>
          </div>
        </div>
      </section>
      <section className="mt-48">
        <h1 className="px-20 title-20-md">어디로 가시나요?</h1>
        <div className="scrollbar-hide mt-[16px] flex gap-[16px] overflow-x-scroll px-20">
          <div className="h-[68px] w-[68px] flex-none rounded-full bg-gray-200" />
          <div className="h-[68px] w-[68px] flex-none rounded-full bg-gray-200" />
          <div className="h-[68px] w-[68px] flex-none rounded-full bg-gray-200" />
          <div className="h-[68px] w-[68px] flex-none rounded-full bg-gray-200" />
          <div className="h-[68px] w-[68px] flex-none rounded-full bg-gray-200" />
        </div>
      </section>
      <section className="mt-48">
        <h1 className="px-20 title-20-md">지금 인기 있는 맛집!</h1>
        <div className="scrollbar-hide mt-[16px] flex gap-[16px] overflow-x-scroll px-20">
          {celebsRecommendations.map(({ id, name, category, images, roadAddress }) => (
            <RestaurantCard
              key={id}
              name={name}
              category={category}
              imageUrl={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/${images[0].name}.webp`}
              location={roadAddress}
              tag="성시경외 3명 추천 맛집"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
