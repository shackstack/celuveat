'use client';

import ReviewCard from '@/components/ReviewCard';
import { useUserProfileQuery } from '@/hooks/server/members';
import { useRestaurantReviewsQuery } from '@/hooks/server/reviews';

function RestaurantReviewPage({ searchParams }: { searchParams: { restaurantId: string } }) {
  const { data: reviews } = useRestaurantReviewsQuery(Number(searchParams.restaurantId), {});
  const { data: myProfile } = useUserProfileQuery();

  return (
    <ul className="mt-16 flex flex-col px-20">
      {reviews.pages.map(page =>
        page.contents.map(review => (
          <>
            <ReviewCard key={review.id} review={review} isMyReview={myProfile.id === review.writer.id} />
            <hr className="my-16 h-1 w-full bg-gray-100" />
          </>
        )),
      )}
    </ul>
  );
}

export default RestaurantReviewPage;