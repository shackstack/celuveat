import { colors } from "@/lib/colors";
import IconLocation from "@/lib/components/@icon/IconLocation";
import { useNavigate } from "react-router-dom";

function MyPositionButton() {
  const navigate = useNavigate();

  const goToMap = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      navigate(`/map?centerX=${longitude}&centerY=${latitude}&zoom=16`, {
        replace: true,
      });
    });
  };

  return (
    <div
      className="flex h-[64px] w-[64px] flex-none flex-col items-center justify-center gap-[3px] rounded-full bg-mainDim-15"
      onClick={goToMap}
    >
      <IconLocation fill={colors.main[700]} />
      <span className="text-main-700 body-13-rg">내 주변</span>
    </div>
  );
}

export default MyPositionButton;
