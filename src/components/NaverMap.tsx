import { useEffect, useRef, useState } from "react";

import { useRestaurantsQuery } from "@/hooks/server/restaurants";
import { useSearchParams } from "react-router-dom";

interface NaverMapProps {
  cn: string;
}

function NaverMap({ cn }: NaverMapProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mapRef = useRef<naver.maps.Map | null>(null);
  const markersRef = useRef<Map<number, naver.maps.Marker>>(new Map());
  const [searchParams] = useSearchParams();

  // 쿼리 파라미터에서 초기값 추출
  const getInitialParams = () => ({
    lowLatitude: searchParams.get("lowLatitude") || "",
    lowLongitude: searchParams.get("lowLongitude") || "",
    highLatitude: searchParams.get("highLatitude") || "",
    highLongitude: searchParams.get("highLongitude") || "",
    zoom: searchParams.get("zoom") || "16",
    centerX: searchParams.get("centerX") || "127.0399848",
    centerY: searchParams.get("centerY") || "37.5248599",
  });

  const [params, setParams] = useState(getInitialParams());

  const { data: restaurants } = useRestaurantsQuery({
    lowLatitude: params.lowLatitude,
    lowLongitude: params.lowLongitude,
    highLatitude: params.highLatitude,
    highLongitude: params.highLongitude,
  });

  // 지도 객체 최초 1회만 생성
  useEffect(() => {
    if (!ref.current || mapRef.current) return;

    const newMap = new naver.maps.Map(ref.current, {
      zoom: Number(params.zoom),
      center: new naver.maps.LatLng(
        Number(params.centerY),
        Number(params.centerX)
      ),
    });

    const onChange = () => {
      const bounds = newMap.getBounds();
      const zoom = newMap.getZoom();
      const center = newMap.getCenter();

      if (!bounds) return;

      // 상태와 쿼리파라미터 모두 업데이트
      const nextParams = {
        lowLatitude: bounds.getMin().y.toString(),
        lowLongitude: bounds.getMin().x.toString(),
        highLatitude: bounds.getMax().y.toString(),
        highLongitude: bounds.getMax().x.toString(),
        zoom: zoom.toString(),
        centerX: center.x.toString(),
        centerY: center.y.toString(),
      };
      setParams(nextParams);
    };

    naver.maps.Event.addListener(newMap, "idle", onChange);

    mapRef.current = newMap;
  }, []);

  // 마커 관리도 ref로
  useEffect(() => {
    if (!mapRef.current || !restaurants) return;

    markersRef.current.clear();
    restaurants.pages[0].contents.forEach(
      ({ id, latitude, longitude, visitedCelebrities }) => {
        if (markersRef.current.has(id)) return;
        const newMarker = new naver.maps.Marker({
          position: new naver.maps.LatLng(latitude, longitude),
          map: mapRef.current!,
          icon: {
            content: `<img
              src="${visitedCelebrities[0].profileImageUrl}"
              class="relative bottom-[19px] right-[19px] h-[38px] min-h-[38px] w-[38px] min-w-[38px] flex-none rounded-full border-[3px] border-white object-cover"
            />`,
          },
        });
        markersRef.current.set(id, newMarker);
      }
    );
  }, [JSON.stringify(restaurants)]);

  return <div ref={ref} className={cn} />;
}

export default NaverMap;
