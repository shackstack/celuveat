import { Restaurant } from "@/@types";
import { Link } from "react-router-dom";
import RestaurantLikeButton from "./RestaurantLikeButton";
import RestaurantImage from "./RestaurantImage";

function RestaurantCardRow({
  id,
  name,
  images,
  category,
  roadAddress,
  introduction,
  liked,
}: Restaurant) {
  return (
    <div className="relative">
      <Link
        to={`/restaurants/restaurant?restaurantId=${id}`}
        className="flex gap-12"
      >
        <div className="relative h-[112px] w-[112px] overflow-hidden rounded-[8px] bg-gray-200">
          <RestaurantImage
            src={images[0]?.url}
            alt={name}
            className="object-cover w-full h-full absolute"
          />
        </div>
        <div className="relative flex flex-1 flex-col">
          <h3 className="mt-2 w-4/5 title-16-sb">{name}</h3>
          <span className="mt-4 text-gray-400 caption-12-rg">{category}</span>
          <span className="text-gray-800 body-13-rg">{roadAddress}</span>
          <p className="absolute bottom-0 left-0 text-gray-600 body-13-rg">
            {introduction}
          </p>
        </div>
      </Link>
      <RestaurantLikeButton liked={liked} restaurantId={id} isRow />
    </div>
  );
}

export default RestaurantCardRow;
