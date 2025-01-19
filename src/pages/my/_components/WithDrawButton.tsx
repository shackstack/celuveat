import { overlay } from "overlay-kit";

import { useWithDrawMutation } from "@/hooks/server/members";
import useToast from "@/hooks/useToast";
import { useNavigate } from "react-router-dom";
import BottomSheet from "@/lib/components/BottomSheet";

function WithDrawButton() {
  const { mutate } = useWithDrawMutation();
  const showToast = useToast();
  const navigate = useNavigate();

  const onClickWithDrawButton = async () => {
    overlay.open(({ isOpen, close }) => {
      const withDraw = async () => {
        mutate(undefined, {
          onSuccess: () => {
            navigate("/");
            showToast("탈퇴가 완료되었습니다.");
          },
        });
        close();
      };

      return (
        <BottomSheet open={isOpen} onClose={close}>
          <h1 className="text-center text-[18px] font-[700] text-gray-900">
            셀럽잇을 떠나시나요?
          </h1>
          <p className="mt-16 text-center text-gray-800 body-14-rg">
            탈퇴 시 모든 정보와 활동 기록이 삭제됩니다.
            <br />
            그래도 탈퇴하시겠어요?
          </p>
          <div className="mt-24 flex h-[50px] gap-12">
            <button
              type="button"
              onClick={close}
              className="flex h-full flex-1 items-center justify-center rounded-[8px] bg-gray-100 text-gray-700 body-16-md"
            >
              취소
            </button>
            <button
              type="button"
              onClick={withDraw}
              className="flex h-full flex-1 items-center justify-center rounded-[8px] bg-mainDim-15 text-main-700 body-16-md"
            >
              탈퇴하기
            </button>
          </div>
        </BottomSheet>
      );
    });
  };

  return (
    <button
      type="button"
      onClick={onClickWithDrawButton}
      className="h-[50px] w-full items-center justify-center text-gray-400 body-14-md"
    >
      회원탈퇴
    </button>
  );
}

export default WithDrawButton;
