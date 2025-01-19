import {
  useDeleteInterestedRestaurantMutation,
  useInterestedRestaurantMutation,
} from "@/hooks/server/restaurants";
import useOptimisticLike from "@/hooks/useOptimisticLike";
import { colors } from "@/lib/colors";
import IconHeartFilled from "@/lib/components/@icon/IconHeartFilled";
import IconPlus from "@/lib/components/@icon/IconPlus";

interface RestaurantAddInterestButtonProps {
  liked: boolean;
  restaurantId: number;
}

function RestaurantAddInterestButton({
  liked,
  restaurantId,
}: RestaurantAddInterestButtonProps) {
  const { mutate: mutateLike } = useInterestedRestaurantMutation();
  const { mutate: mutateCancelLike } = useDeleteInterestedRestaurantMutation();
  const { isLiked, handleClickLike, handleClickCancelLike } = useOptimisticLike(
    {
      liked,
      onClickLike: () => mutateLike(restaurantId),
      onClickCancelLike: () => mutateCancelLike(restaurantId),
    }
  );

  return isLiked ? (
    <button
      type="button"
      onClick={handleClickCancelLike}
      className="flex h-full flex-1 justify-center gap-4 rounded-[8px] bg-main-600 py-12"
    >
      <IconHeartFilled width={20} height={20} fill={colors.white.DEFAULT} />
      <span className="text-white title-15-md">관심</span>
    </button>
  ) : (
    <button
      type="button"
      onClick={handleClickLike}
      className="flex h-full flex-1 justify-center gap-4 rounded-[8px] bg-[rgba(255,_123,_84,_0.15)] py-12"
    >
      <IconPlus width={20} height={20} fill={colors.main[700]} />
      <span className="text-main-700 title-15-md">관심 추가</span>
    </button>
  );
}

export default RestaurantAddInterestButton;
