import { useUserProfileQuery, useLogoutMutation } from "@/hooks/server/members";
import { colors } from "@/lib/colors";
import IconArrowRight from "@/lib/components/@icon/IconArrowRight";
import IconHeartFilled from "@/lib/components/@icon/IconHeartFilled";
import IconReviewFilled from "@/lib/components/@icon/IconReviewFilled";
import Avatar from "@/lib/components/Avatar";
import { Link } from "react-router-dom";
import WithDrawButton from "./_components/WithDrawButton";
import Header from "@/components/Header";

function Menu({
  label,
  menus,
}: {
  label: string;
  menus: {
    title: string;
    href: string;
  }[];
}) {
  return (
    <section className="pb-9 pt-20">
      <div className="px-20 py-8 text-gray-400 body-14-md">{label}</div>
      {menus.map(({ title, href }) => (
        <Link
          to={href}
          key={title}
          className="flex h-[50px] items-center justify-between px-20"
        >
          <span className="text-gray-900 body-16-md">{title}</span>
          <IconArrowRight width={20} height={20} />
        </Link>
      ))}
    </section>
  );
}

const MENUS1 = [
  { title: "알림 설정", href: "" },
  { title: "업데이트 소식", href: "" },
  { title: "제안하기", href: "" },
];

const MENUS2 = [
  { title: "앱 정보", href: "" },
  { title: "이용 약관", href: "" },
  { title: "개인정보 보호 방침", href: "" },
];

const MyPage = () => {
  const { data: myProfile } = useUserProfileQuery();
  const { mutate } = useLogoutMutation();

  const onClickLogout = () => {
    mutate(undefined, {
      onSuccess: () => {
        window.location.href = "/";
      },
    });
  };

  return (
    <>
      <Header title="마이" />
      <section className="flex flex-col gap-20">
        <div className="flex items-center justify-between p-20">
          <div className="flex items-center gap-12">
            {myProfile && (
              <Avatar
                imageUrl={myProfile?.profileImageUrl}
                size={52}
                alt="프로필 이미지"
              />
            )}
            <span className="title-20-md">{myProfile?.nickname}</span>
          </div>
          <Link
            to="/my/profile"
            className="flex h-36 flex-none items-center justify-center rounded-[8px] bg-gray-100 px-12 body-13-rg"
          >
            프로필 수정
          </Link>
        </div>

        <div className="px-20">
          <div className="flex h-[70px] justify-evenly rounded-[8px] bg-[#FFB26C1A] px-20 py-14">
            <Link to="/interested" className="flex flex-col items-center gap-3">
              <div className="flex gap-4">
                <IconHeartFilled
                  width={19}
                  height={18}
                  fill={colors.main[500]}
                />
                <h2 className="text-gray-800 body-14-rg">관심 리스트</h2>
              </div>
              <span className="text-main-700 title-16-sb">
                {myProfile?.interestedCount}
              </span>
            </Link>
            <hr className="h-full w-1 rounded-[100px] bg-main-500 opacity-20" />
            <Link to="/reviews/my" className="flex flex-col items-center gap-3">
              <div className="flex gap-4">
                <IconReviewFilled
                  width={19}
                  height={18}
                  fill={colors.main[500]}
                />
                <h2 className="text-gray-800 body-14-rg">작성한 리뷰</h2>
              </div>
              <span className="text-main-700 title-16-sb">
                {myProfile?.reviewCount}
              </span>
            </Link>
          </div>
        </div>
      </section>
      <Menu label="서비스 이용" menus={MENUS1} />
      <div className="px-20">
        <hr className="h-1 bg-gray-100" />
      </div>
      <Menu label="기타" menus={MENUS2} />
      <section className="px-20 py-16">
        <button
          type="button"
          className="flex h-[50px] w-full items-center justify-center rounded-[8px] bg-gray-100 text-gray-700 body-16-md"
          onClick={onClickLogout}
        >
          로그아웃
        </button>
        <WithDrawButton />
      </section>
    </>
  );
};

export default MyPage;
