import { colors } from "@/lib/colors";
import IconClose from "@/lib/components/@icon/IconClose";
import IconInfo from "@/lib/components/@icon/IconInfo";
import { useState } from "react";

function CelebritiesRecommendedRestaurantsInformation() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="relative">
      <IconInfo
        onClick={() => {
          setIsClicked(true);
        }}
      />

      {isClicked && (
        <div className="border-1 absolute left-[-64px] top-28 z-[100] flex items-center gap-12 border bg-white px-16 py-10">
          <span className="text-nowrap body-13-rg">
            2명 이상의 셀럽이 추천한 <br /> 맛집만 소개해 드려요!
          </span>
          <IconClose
            className="flex-none"
            width={16}
            height={16}
            fill={colors.gray[400]}
            onClick={() => {
              setIsClicked(false);
            }}
          />
        </div>
      )}
    </div>
  );
}

export default CelebritiesRecommendedRestaurantsInformation;
