import { useEffect, useRef, useState } from "react";

import { useRestaurantsQuery } from "@/hooks/server/restaurants";
import { useSearchParams } from "react-router-dom";

interface NaverMapProps {
  cn: string;
}

function NaverMap({ cn }: NaverMapProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<naver.maps.Map | null>(null);
  const [markers, setMarkers] = useState(new Map());
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: restaurants } = useRestaurantsQuery({
    lowLatitude: searchParams.get("lowLatitude")!,
    lowLongitude: searchParams.get("lowLongitude")!,
    highLatitude: searchParams.get("highLatitude")!,
    highLongitude: searchParams.get("highLongitude")!,
  });

  useEffect(() => {
    if (!ref.current) return;

    const newMap = new naver.maps.Map(ref.current, {
      zoom: searchParams.get("zoom") ? Number(searchParams.get("zoom")) : 16,
      center: new naver.maps.LatLng(
        searchParams.get("centerY")
          ? Number(searchParams.get("centerY"))
          : 37.5248599,
        searchParams.get("centerX")
          ? Number(searchParams.get("centerX"))
          : 127.0399848
      ),
    });

    const handleDrag = () => {
      const bounds = newMap.getBounds();
      const zoom = newMap.getZoom();
      const center = newMap.getCenter();

      if (!bounds) return;

      searchParams.set("lowLatitude", bounds.getMin().y.toString());
      searchParams.set("lowLongitude", bounds.getMin().x.toString());
      searchParams.set("highLatitude", bounds.getMax().y.toString());
      searchParams.set("highLongitude", bounds.getMax().x.toString());
      searchParams.set("zoom", zoom.toString());
      searchParams.set("centerX", center.x.toString());
      searchParams.set("centerY", center.y.toString());
      setSearchParams(searchParams);
    };

    handleDrag();
    const moveEventListener = naver.maps.Event.addListener(
      newMap,
      "idle",
      handleDrag
    );

    setMap(newMap);

    return () => {
      naver.maps.Event.removeListener(moveEventListener);
    };
  }, []);

  useEffect(() => {
    if (!map) return;

    // 마커 등록
    restaurants?.pages[0].contents.forEach(
      ({ id, latitude, longitude, visitedCelebrities }) => {
        if (markers.has(id)) return;

        const newMarker = new naver.maps.Marker({
          position: new naver.maps.LatLng(latitude, longitude),
          map,
          icon: {
            content: /* HTML */ `<img
              src="${visitedCelebrities[0].profileImageUrl}"
              class="relative bottom-[19px] right-[19px] h-[38px] min-h-[38px] w-[38px] min-w-[38px] flex-none rounded-full border-[3px] border-white object-cover"
            />`,
          },
        });
        setMarkers((prev) => prev.set(id, newMarker));
      }
    );
  }, [restaurants, map]);

  return <div ref={ref} className={cn} />;
}

export default NaverMap;
