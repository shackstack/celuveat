'use client';

import { IconHeartFilled20, IconPlus20 } from '@/assets/icons';
import BottomSheet from '@/components/@ui/BottomSheet';
import {
  useCelebrityInfoQuery,
  useDeleteInterestedCelebrityMutation,
  useInterestedCelebrityMutation,
} from '@/hooks/server';
import Image from 'next/image';
import Link from 'next/link';
import { overlay } from 'overlay-kit';
import { useState } from 'react';

interface CelebIntroductionSectionProps {
  celebId: number;
}

const CelebIntroductionSection = ({ celebId }: CelebIntroductionSectionProps) => {
  const {
    data: { celebrity, interested },
  } = useCelebrityInfoQuery(celebId);
  const [isLiked, setIsLiked] = useState(interested);

  const { mutateAsync } = useInterestedCelebrityMutation();
  const { mutateAsync: deleteMutateAsync } = useDeleteInterestedCelebrityMutation();

  const handleClickLike = async () => {
    try {
      await mutateAsync(celebrity.id);
      setIsLiked(true);
    } catch (err) {
      setIsLiked(false);
    }
  };

  const handleClickUnlike = async () => {
    try {
      await deleteMutateAsync(celebrity.id);
      setIsLiked(false);
    } catch (err) {
      setIsLiked(true);
    }
  };

  const openBottomSheet = () => {
    overlay.open(({ isOpen, unmount }) => {
      return (
        <BottomSheet open={isOpen} onClose={unmount} title="유튜브 채널 바로가기">
          {celebrity.youtubeContentResults.map(({ id, channelUrl, contentsName }) => (
            <Link
              key={id}
              href={channelUrl}
              className="rounded-[8px]] flex h-56 w-full items-center justify-center gap-8 bg-gray-100"
            >
              <span className="body-16-md">{contentsName} 채널 바로가기</span>
            </Link>
          ))}
          <button
            className="mt-16 flex h-56 w-full items-center justify-center gap-8 rounded-[8px] bg-gray-100"
            onClick={unmount}
          >
            <span className="body-16-md">닫기</span>
          </button>
        </BottomSheet>
      );
    });
  };

  return (
    <>
      <div className="flex">
        <div className="flex-1">
          <span className="title-22-md">{celebrity.name}</span>
          <div className="mt-6 flex items-center">
            <span className="body-14-rg">구독자</span>
            <span className="ml-2 body-14-md">{celebrity.youtubeContentResults[0].subscriberCount}명</span>
            <span className="ml-12 body-14-rg">추천 매장</span>
            <span className="ml-2 body-14-md">{celebrity.youtubeContentResults[0].restaurantCount}개</span>
          </div>
          <p className="mt-14 pr-16 body-13-rg">{celebrity.introduction}</p>
        </div>

        <Image
          className="h-72 w-72 rounded-full bg-gray-200"
          src={celebrity.profileImageUrl}
          alt={celebrity.name}
          width={72}
          height={72}
        />
      </div>
      <div className="mt-20 flex gap-10">
        {isLiked ? (
          <button
            className="flex flex-1 justify-center gap-4 rounded-[8px] bg-main-600 py-12 title-15-md"
            onClick={handleClickUnlike}
          >
            <IconHeartFilled20 /> <span className="text-white">관심</span>
          </button>
        ) : (
          <button
            className="flex flex-1 justify-center gap-4 rounded-[8px] bg-[rgba(255,_123,_84,_0.15)] py-12"
            onClick={handleClickLike}
          >
            <IconPlus20 />
            <span className="text-main-700 title-15-md">관심 추가</span>
          </button>
        )}
        <button className="flex-1 rounded-[8px] bg-gray-100 py-12 text-gray-700 title-15-md" onClick={openBottomSheet}>
          유튜브 바로가기
        </button>
      </div>
    </>
  );
};

export default CelebIntroductionSection;
