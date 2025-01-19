import { motion } from "framer-motion";

import {
  useDeleteInterestedRestaurantMutation,
  useInterestedRestaurantMutation,
} from "@/hooks/server/restaurants";
import IconHeartFilled from "@/lib/components/@icon/IconHeartFilled";
import IconHeartOutlined from "@/lib/components/@icon/IconHeartOutlined";
import useOptimisticLike from "@/hooks/useOptimisticLike";
// import useOptimisticLike from "@/hooks/useOptimisticLike";

interface RestaurantLikeButtonProps {
  liked: boolean;
  restaurantId: number;
  isRow?: boolean;
}

function RestaurantLikeButton({
  liked,
  restaurantId,
  isRow,
}: RestaurantLikeButtonProps) {
  const { mutate: mutateLike } = useInterestedRestaurantMutation();
  const { mutate: mutateCancelLike } = useDeleteInterestedRestaurantMutation();
  const { isLiked, handleClickLike, handleClickCancelLike } = useOptimisticLike(
    {
      liked,
      onClickLike: () => mutateLike(restaurantId),
      onClickCancelLike: () => mutateCancelLike(restaurantId),
    }
  );

  return (
    <div
      className={`absolute right-4 top-4 z-0 flex h-28 w-28 items-center justify-center rounded-[8px] ${isRow ? "" : "bg-dim-25"}`}
    >
      <motion.button whileTap={{ scaleY: 0.7 }}>
        {isLiked ? (
          <IconHeartFilled
            className="*:fill-main-500"
            onClick={handleClickCancelLike}
          />
        ) : (
          <IconHeartOutlined
            className="*:fill-gray-200"
            onClick={handleClickLike}
          />
        )}
      </motion.button>
    </div>
  );
}

export default RestaurantLikeButton;
