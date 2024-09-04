'use client';

import Image from 'next/image';
import Link from 'next/link';
import RestaurantLikeButton from '@/components/RestaurantLikeButton';
import { Restaurant } from '@/@types';
import IconThumbsUpFilled from '@/components/@icon/IconThumbsUpFilled';
import { colors } from '@/constants/colors';

const RestaurantCard = ({ id, name, category, images, roadAddress, visitedCelebrities, liked }: Restaurant) => {
  return (
    <div className="relative flex w-[140px] flex-none flex-col">
      <Link href={`/restaurants/restaurant/${name}`}>
        <div className="relative h-[140px] w-full overflow-hidden rounded-[8px] bg-gray-200">
          {<Image src={images[0].url} fill alt={name} sizes="100%" className="object-cover" />}
        </div>
        <div className="mt-12 overflow-x-hidden text-ellipsis whitespace-nowrap">
          <span className="title-15-md">{name}</span>
          <span className="ml-4 caption-12-rg">{category}</span>
        </div>
        <span className="mt-4 body-13-rg">{roadAddress.split(' ').slice(0, 2).join(' ')}</span>
        <div className="mt-8 flex w-fit items-center gap-2 rounded-[3px] bg-[#FFB26C38] px-6 py-4">
          <IconThumbsUpFilled width={12} height={12} fill={colors.main[500]} />
          <span className="text-main-700 caption-12-rg">
            {visitedCelebrities.length - 1 === 0
              ? `${visitedCelebrities[0]?.name} 추천 맛집`
              : `${visitedCelebrities[0]?.name}외 ${visitedCelebrities.length - 1}명 추천 맛집`}
          </span>
        </div>
      </Link>
      <RestaurantLikeButton restaurantId={id} liked={liked} cn="absolute top-8 right-8" />
    </div>
  );
};

export default RestaurantCard;
