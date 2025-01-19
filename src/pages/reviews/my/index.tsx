import Header from "@/components/Header";
import ReviewCard from "@/components/ReviewCard";
import { useMyReviewsQuery } from "@/hooks/server/reviews";
import IconCaution from "@/lib/components/@icon/iconCaution";

const MyReviewsPage = () => {
  const { data: reviews } = useMyReviewsQuery();

  return (
    <>
      <Header title="작성한 리뷰" withBack />
      <main className="h-full">
        {!reviews.length && (
          <div className="flex h-[90vh] flex-col items-center justify-center">
            <IconCaution width={64} height={64} />
            <span className="mt-20 text-gray-900 title-18-bold">
              등록된 리뷰가 없습니다
            </span>
            <span className="mt-8 text-gray-600 body-13-rg">
              방문한 맛집의 리뷰를 등록해보세요.
            </span>
          </div>
        )}
        {reviews.length && (
          <ul className="mt-16 flex flex-col px-20">
            {reviews.map((review) => (
              <>
                <ReviewCard key={review.id} review={review} isMyReview />
                <hr className="my-16 h-1 w-full bg-gray-100" />
              </>
            ))}
          </ul>
        )}
      </main>
    </>
  );
};

export default MyReviewsPage;
