import {
  useDeleteReviewHelpfulMutation,
  usePostReviewHelpfulMutation,
} from "@/hooks/server/reviews";
import useOptimisticLike from "@/hooks/useOptimisticLike";
import { colors } from "@/lib/colors";
import IconThumbsUpFilled from "@/lib/components/@icon/IconThumbsUpFilled";
import IconThumbsUpOutlined from "@/lib/components/@icon/IconThumbsUpOutlined";

interface RestaurantReviewLikeButtonProps {
  reviewId: number;
  helps: number;
  clickedHelpful: boolean;
}

function RestaurantReviewLikeButton({
  reviewId,
  helps,
  clickedHelpful,
}: RestaurantReviewLikeButtonProps) {
  const { mutate: mutateLike } = usePostReviewHelpfulMutation();
  const { mutate: mutateCancelLike } = useDeleteReviewHelpfulMutation();
  const { isLiked, handleClickLike, handleClickCancelLike } = useOptimisticLike(
    {
      liked: clickedHelpful,
      onClickLike: () => mutateLike(reviewId),
      onClickCancelLike: () => mutateCancelLike(reviewId),
    }
  );

  return isLiked ? (
    <button
      type="button"
      onClick={handleClickCancelLike}
      className="mt-14 flex items-center gap-4 rounded-[6px] bg-main-600 p-8"
    >
      <IconThumbsUpFilled width={16} height={16} fill={colors.white.DEFAULT} />
      <span className="text-white caption-12-rg">
        {clickedHelpful ? helps : helps + 1}
      </span>
    </button>
  ) : (
    <button
      type="button"
      onClick={handleClickLike}
      className="mt-14 flex items-center gap-4 rounded-[6px] p-8 outline outline-1 outline-gray-200"
    >
      <IconThumbsUpOutlined width={16} height={16} fill={colors.gray[300]} />
      <span className="text-gray-600 caption-12-rg">
        {clickedHelpful ? helps - 1 : helps}
      </span>
    </button>
  );
}

export default RestaurantReviewLikeButton;
