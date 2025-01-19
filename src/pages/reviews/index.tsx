import Header from "@/components/Header";
import ReviewCard from "@/components/ReviewCard";
import { useUserProfileQuery } from "@/hooks/server/members";
import { useRestaurantReviewsQuery } from "@/hooks/server/reviews";
import { useSearchParams } from "react-router-dom";

const ReviewsPage = () => {
  const [searchParams] = useSearchParams();
  const { data: reviews } = useRestaurantReviewsQuery(
    Number(searchParams.get("restaurantId")),
    {}
  );
  const { data: myProfile } = useUserProfileQuery();

  // 제목고도화 더 필요
  return (
    <>
      <Header withBack title="리뷰 더보기" />
      <ul className="mt-16 flex flex-col px-20">
        {reviews.pages.map((page) =>
          page.contents.map((review) => (
            <>
              <ReviewCard
                key={review.id}
                review={review}
                isMyReview={myProfile!.id === review.writer.id}
              />
              <hr className="my-16 h-1 w-full bg-gray-100" />
            </>
          ))
        )}
      </ul>
    </>
  );
};

export default ReviewsPage;
