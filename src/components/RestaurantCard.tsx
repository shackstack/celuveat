import { Restaurant } from "@/@types";

import RestaurantLikeButton from "@/components/RestaurantLikeButton";
import { colors } from "@/lib/colors";
import IconThumbsUpFilled from "@/lib/components/@icon/IconThumbsUpFilled";
import Image from "@/lib/components/Image";
import { Link } from "react-router-dom";

function RestaurantCard({
  id,
  name,
  category,
  images,
  roadAddress,
  visitedCelebrities,
  liked,
}: Restaurant) {
  return (
    <div className="relative flex w-[128px] flex-none flex-col">
      <Link to={`/restaurants/restaurant?restaurantId=${id}`}>
        {images[0]?.url ? (
          <Image
            src={images[0].url}
            width={128}
            height={128}
            alt={name}
            className="aspect-square rounded-[8px] bg-gray-200 object-cover"
          />
        ) : (
          <div className="h-[128px] w-[128px] rounded-[8px] bg-gray-200" />
        )}
        <div className="mt-12 overflow-x-hidden text-ellipsis whitespace-nowrap">
          <span className="title-15-md">{name}</span>
          <span className="ml-4 caption-12-rg">{category}</span>
        </div>
        <span className="mt-4 body-13-rg">
          {roadAddress.split(" ").slice(0, 2).join(" ")}
        </span>
        <div className="mt-8 flex w-fit items-center gap-2 rounded-[3px] bg-[#FFB26C38] px-6 py-4">
          <IconThumbsUpFilled width={12} height={12} fill={colors.main[500]} />
          <span className="text-main-700 caption-12-rg">
            {visitedCelebrities.length - 1 === 0
              ? `${visitedCelebrities[0]?.name} 추천 맛집`
              : `${visitedCelebrities[0]?.name}외 ${visitedCelebrities.length - 1}명 추천`}
          </span>
        </div>
      </Link>
      <RestaurantLikeButton restaurantId={id} liked={liked} />
    </div>
  );
}

export default RestaurantCard;
