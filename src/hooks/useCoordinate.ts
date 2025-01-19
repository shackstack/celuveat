import { useSearchParams } from "react-router-dom";

const useCoordinate = () => {
  const [searchParams] = useSearchParams();

  return {
    coordinate: {
      lowLatitude: searchParams.get("lowLatitude")!,
      lowLongitude: searchParams.get("lowLongitude")!,
      highLatitude: searchParams.get("highLatitude")!,
      highLongitude: searchParams.get("highLongitude")!,
    },
  };
};

export default useCoordinate;
