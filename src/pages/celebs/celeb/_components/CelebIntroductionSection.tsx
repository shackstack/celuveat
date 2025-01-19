import { overlay } from "overlay-kit";
import { Fragment } from "react";

import {
  useCelebrityQuery,
  useDeleteInterestedCelebrityMutation,
  useInterestedCelebrityMutation,
} from "@/hooks/server/celebs";
import useOptimisticLike from "@/hooks/useOptimisticLike";
import { colors } from "@/lib/colors";
import IconBullet from "@/lib/components/@icon/IconBullet";
import IconHeartFilled from "@/lib/components/@icon/IconHeartFilled";
import IconPlus from "@/lib/components/@icon/IconPlus";
import Avatar from "@/lib/components/Avatar";
import BottomSheet from "@/lib/components/BottomSheet";
import { formatToTenThousandUnits } from "@/lib/utils/formatToTenThousandUnits";
import { Link } from "react-router-dom";

interface CelebIntroductionSectionProps {
  celebrityId: number;
}

function CelebIntroductionSection({
  celebrityId,
}: CelebIntroductionSectionProps) {
  const { data } = useCelebrityQuery(celebrityId);
  const { mutate: mutateLike } = useInterestedCelebrityMutation();
  const { mutate: mutateCancelLike } = useDeleteInterestedCelebrityMutation();
  const { isLiked, handleClickLike, handleClickCancelLike } = useOptimisticLike(
    {
      liked: !!data?.interested,
      onClickLike: () => mutateLike(celebrityId),
      onClickCancelLike: () => mutateCancelLike(celebrityId),
    }
  );

  const openBottomSheet = () => {
    overlay.open(({ isOpen, unmount }) => {
      return (
        <BottomSheet open={isOpen} onClose={unmount}>
          {data?.celebrity.youtubeContentResults.map(
            ({ id, channelUrl, contentsName }, index) => (
              <Fragment key={id}>
                {index !== 0 && <hr className="h-1 w-full bg-gray-100" />}
                <Link
                  key={id}
                  to={channelUrl}
                  className="flex h-56 w-full items-center justify-center"
                >
                  <span className="title-16-sb">
                    채널 {contentsName} 바로가기
                  </span>
                </Link>
              </Fragment>
            )
          )}
          <button
            type="button"
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
          <span className="title-22-md">{data?.celebrity.name}</span>
          <div className="mt-6 flex items-center gap-5">
            <div>
              <span className="body-14-rg">추천 맛집</span>
              <span className="ml-2 body-14-md">
                {data?.celebrity.youtubeContentResults[0].restaurantCount}개
              </span>
            </div>
            <IconBullet />
            <div>
              <span className="body-14-rg">구독자</span>
              <span className="ml-2 body-14-md">
                {formatToTenThousandUnits(
                  data?.celebrity.youtubeContentResults[0].subscriberCount
                )}
                명
              </span>
            </div>
          </div>
          <p className="mt-14 pr-16 body-13-rg">
            {data?.celebrity.introduction}
          </p>
        </div>
        <div>
          <Avatar
            imageUrl={data?.celebrity.profileImageUrl}
            size={72}
            alt={data?.celebrity.name}
          />
        </div>
      </div>
      <div className="mt-20 flex gap-10">
        {isLiked ? (
          <button
            type="button"
            className="flex flex-1 justify-center gap-4 rounded-[8px] bg-main-600 py-12 title-15-md"
            onClick={handleClickCancelLike}
          >
            <IconHeartFilled
              width={20}
              height={20}
              fill={colors.white.DEFAULT}
            />
            <span className="text-white">관심</span>
          </button>
        ) : (
          <button
            type="button"
            className="flex flex-1 justify-center gap-4 rounded-[8px] bg-[rgba(255,_123,_84,_0.15)] py-12"
            onClick={handleClickLike}
          >
            <IconPlus width={20} height={20} fill={colors.main[700]} />
            <span className="text-main-700 title-15-md">관심 추가</span>
          </button>
        )}
        <button
          type="button"
          className="flex-1 rounded-[8px] bg-gray-100 py-12 text-gray-700 title-15-md"
          onClick={openBottomSheet}
        >
          유튜브 바로가기
        </button>
      </div>
    </>
  );
}

export default CelebIntroductionSection;
