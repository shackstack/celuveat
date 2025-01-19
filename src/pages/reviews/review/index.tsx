import { useRestaurantQuery } from "@/hooks/server/restaurants";
import { useReviewQuery } from "@/hooks/server/reviews";
import IconBullet from "@/lib/components/@icon/IconBullet";
import { useSearchParams } from "react-router-dom";
import ReviewForm from "./_components/ReviewForm";
import Header from "@/components/Header";
import Spacing from "@/lib/components/Spacing";

const ReviewFormPage = () => {
  const [searchParams] = useSearchParams();

  const { data: restaurant } = useRestaurantQuery(
    Number(searchParams.get("restaurantId"))
  );
  const { data: review } = useReviewQuery(searchParams.get("reviewId"));

  return (
    <>
      <Header withBack title="리뷰 작성하기" />
      <Spacing size={20} />
      <main className="px-20">
        <section className="flex justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-5">
              <span className="text-gray-800 body-14-md">
                {restaurant.category}
              </span>
              <IconBullet />
              <span className="text-gray-400 body-14-rg">
                {restaurant.roadAddress}
              </span>
            </div>
            <h1 className="text-gray-900 title-22-md">{restaurant.name}</h1>
          </div>

          {restaurant.images[0]?.url && (
            <img
              src={restaurant.images[0]?.url}
              alt={restaurant.name}
              width={56}
              height={56}
              className="aspect-square rounded-[6px] object-cover w-[56px] h-[56px]"
            />
          )}
        </section>
        <hr className="mt-20 border-gray-100" />
        <ReviewForm
          restaurantId={searchParams.get("restaurantId")!}
          review={searchParams.get("reviewId") ? review : null}
        />
      </main>
    </>
  );
};

export default ReviewFormPage;
