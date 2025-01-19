import { SocialLoginType } from "@/@types";
import { useUserProfileQuery } from "@/hooks/server/members";
import { colors } from "@/lib/colors";
import IconHeartFilled from "@/lib/components/@icon/IconHeartFilled";
import IconHomeFilled from "@/lib/components/@icon/IconHomeFilled";
import IconMapFilled from "@/lib/components/@icon/IconMapFilled";
import IconPersonFilled from "@/lib/components/@icon/IconPersonFilled";
import BottomSheet from "@/lib/components/BottomSheet";
import { overlay } from "overlay-kit";
import { Link, useLocation, useNavigate } from "react-router-dom";
import google from "./_assets/social-login/google_symbol.webp";
import kakao from "./_assets/social-login/kakao_symbol.webp";
import naver from "./_assets/social-login/naver_symbol.webp";

const style = {
  logo: "flex h-56 w-full items-center justify-center gap-8 rounded-[8px]",
};

function BottomNavbar() {
  const { pathname } = useLocation();
  const firstPath = pathname?.split("/")[1];
  const navigate = useNavigate();
  const { data: userData } = useUserProfileQuery();
  const isLogin = !!userData;

  const handleClickLoginButton = async (socialLoginType: SocialLoginType) => {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_SERVER_BASE_URL}/social-login/url/${socialLoginType}`
    );
    window.location.href = await response.text();
  };

  const openLoginBottomSheet = () => {
    overlay.open(({ isOpen, unmount }) => {
      return (
        <BottomSheet open={isOpen} onClose={unmount} title="로그인">
          <button
            type="button"
            className={`${style.logo} bg-[#FEE502]`}
            onClick={() => handleClickLoginButton("KAKAO")}
          >
            <img src={kakao} className="w-24 h-24" alt="카카오 로고" />
            <span className="body-16-md">카카오로 로그인하기</span>
          </button>
          <button
            type="button"
            className={`${style.logo} mt-16 bg-[#03C75A]`}
            onClick={() => handleClickLoginButton("NAVER")}
          >
            <img src={naver} className="w-24 h-24" alt="네이버 로고" />
            <span className="text-white body-16-md">네이버로 로그인하기</span>
          </button>
          <button
            type="button"
            className={`${style.logo} mt-16 bg-gray-100`}
            onClick={() => handleClickLoginButton("GOOGLE")}
          >
            <img src={google} className="w-24 h-24" alt="구글 로고" />
            <span className="body-16-md">구글로 로그인하기</span>
          </button>
        </BottomSheet>
      );
    });
  };

  const handleClickInterestedIcon = () => {
    if (!isLogin) {
      openLoginBottomSheet();
      return;
    }

    navigate("/interested");
  };

  const handleClickLoginIcon = () => {
    openLoginBottomSheet();
  };

  const handleClickMyIcon = () => {
    navigate("/my");
  };

  return (
    <>
      <div className="h-[88px]" />
      <div className="fixed bottom-0 right-1/2 z-[101] flex h-[88px] w-full max-w-[495px] translate-x-1/2 flex-col">
        <nav className="flex h-72 w-full items-start justify-around border-t bg-white px-24 py-8">
          <Link to="/" className="flex flex-col items-center gap-6">
            {firstPath === "" ? (
              <IconHomeFilled width={28} height={28} fill={colors.gray[800]} />
            ) : (
              <IconHomeFilled width={28} height={28} fill={colors.gray[200]} />
            )}
            <span className="text-gray-400 caption-12-rg">홈</span>
          </Link>

          <Link to="/map" className="flex flex-col items-center gap-6">
            {firstPath === "map" ? (
              <IconMapFilled width={28} height={28} fill={colors.gray[800]} />
            ) : (
              <IconMapFilled width={28} height={28} fill={colors.gray[200]} />
            )}
            <span className="text-gray-400 caption-12-rg">지도</span>
          </Link>

          <button
            type="button"
            onClick={handleClickInterestedIcon}
            className="flex flex-col items-center gap-6"
          >
            {firstPath === "interested" ? (
              <IconHeartFilled width={28} height={28} fill={colors.gray[800]} />
            ) : (
              <IconHeartFilled width={28} height={28} fill={colors.gray[200]} />
            )}
            <span className="text-gray-400 caption-12-rg">관심</span>
          </button>

          <div
            onClick={isLogin ? handleClickMyIcon : handleClickLoginIcon}
            className="flex cursor-pointer flex-col items-center gap-6"
          >
            {firstPath === "my" ? (
              <IconPersonFilled
                width={28}
                height={28}
                fill={colors.gray[800]}
              />
            ) : (
              <IconPersonFilled
                width={28}
                height={28}
                fill={colors.gray[200]}
              />
            )}
            <span className="text-gray-400 caption-12-rg">
              {isLogin ? "마이" : "로그인"}
            </span>
          </div>
        </nav>
        <div className="h-[16px] bg-white" />
      </div>
    </>
  );
}

export default BottomNavbar;
