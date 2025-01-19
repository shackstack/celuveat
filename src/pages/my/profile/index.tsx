import { SocialLoginType } from "@/@types";
import {
  useUserProfileQuery,
  useUpdateUserProfileMutation,
} from "@/hooks/server/members";
import useToast from "@/hooks/useToast";
import Avatar from "@/lib/components/Avatar";
import { useState, useCallback } from "react";
import google from "./_assets/social-login/google_logo.webp";
import kakao from "./_assets/social-login/kakao_logo.webp";
import naver from "./_assets/social-login/naver_logo.webp";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";

const LOGO: Record<SocialLoginType, string> = {
  KAKAO: kakao,
  NAVER: naver,
  GOOGLE: google,
};

const MyProfilePage = () => {
  const { data: myProfile, refetch } = useUserProfileQuery();
  const { mutate } = useUpdateUserProfileMutation();
  const [nickname, setNickname] = useState<string>(myProfile!.nickname);

  const navigate = useNavigate();
  const showToast = useToast();

  const handleClickSave = () => {
    mutate(
      { nickname, profileImageUrl: myProfile!.profileImageUrl },
      {
        onSuccess: () => {
          showToast("프로필이 정상적으로 수정되었습니다.");
          refetch();
          navigate(-1);
        },
      }
    );
  };

  const handleChangeNickname = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setNickname(e.target.value);
    },
    []
  );

  return (
    <>
      <Header title="프로필 수정" withBack />
      <section className="flex justify-center pt-[40px]">
        <Avatar
          imageUrl={myProfile!.profileImageUrl}
          size={72}
          alt="프로필 이미지"
        />
      </section>
      <section className="px-20 pb-8 pt-20">
        <h2 className="h-[33px] text-gray-400 body-14-md">별명</h2>
        <input
          className="flex h-48 w-full items-center gap-10 rounded-[12px] bg-gray-100 pl-14 shadow-sm title-15-md"
          onChange={handleChangeNickname}
          value={nickname}
        />
      </section>
      <section className="px-20 pb-8 pt-20">
        <h2 className="h-[33px] text-gray-400 body-14-md">연동 계정</h2>
        <div className="flex h-48 w-full items-center gap-[10px] rounded-[8px] border border-gray-200 px-12 py-8">
          <img
            src={LOGO[myProfile!.serverType]}
            alt="카카오 로고"
            className="w-24 h-24 object-cover"
          />
          <span className="text-gray-800 title-15-md">{myProfile!.email}</span>
        </div>
      </section>
      <section className="absolute bottom-[100px] left-0 w-full px-20">
        <button
          type="button"
          className="mt-20 h-[50px] w-full rounded-[8px] bg-main-600 text-white title-16-sb disabled:bg-mainDim-15 disabled:text-main-700"
          onClick={handleClickSave}
          disabled={nickname === myProfile!.nickname}
        >
          저장하기
        </button>
      </section>
    </>
  );
};

export default MyProfilePage;
