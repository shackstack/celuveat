import { useCallback, useState } from "react";
import useToast from "./useToast";

interface Props {
  liked: boolean;
  onClickLike: () => void;
  onClickCancelLike: () => void;
}

const useOptimisticLike = ({
  liked,
  onClickLike,
  onClickCancelLike,
}: Props) => {
  const [isLiked, setIsLiked] = useState(liked);
  const showToast = useToast();

  const handleClickLike = useCallback(async () => {
    try {
      setIsLiked(true);
      await onClickLike();
    } catch (err) {
      console.error(err);
      setIsLiked(false);
      showToast("로그인이 필요한 서비스입니다.");
    }
  }, []);

  const handleClickCancelLike = useCallback(async () => {
    try {
      setIsLiked(false);
      await onClickCancelLike();
    } catch (err) {
      console.error(err);
      setIsLiked(true);
    }
  }, []);

  return { isLiked, handleClickLike, handleClickCancelLike };
};

export default useOptimisticLike;
