import { useRef, useEffect } from "react";

import { Restaurant } from "@/@types";

function RestaurantDetailPageMap({ latitude, longitude, images }: Restaurant) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const map = new naver.maps.Map(ref.current, {
      center: new naver.maps.LatLng(latitude + 0.0004, longitude),
      zoom: 16,
    });

    if (images.length > 0) {
      new naver.maps.Marker({
        position: new naver.maps.LatLng(latitude, longitude),
        map,
        icon: {
          content: /* HTML */ `
            <div class="relative">
              <img
                src="${images[0].url}"
                class="h-[64px] w-[64px] rounded-full object-cover outline outline-[4px] outline-white ballon2-shadow after:ballon2"
              />
              <div class="ballon2 ballon2-shadow"></div>
            </div>
          `,
          size: new naver.maps.Size(64, 64),
        },
      });
      return;
    }

    new naver.maps.Marker({
      position: new naver.maps.LatLng(latitude, longitude),
      map,
    });
  }, []);

  return <div ref={ref} className="h-[240px] w-full" />;
}

export default RestaurantDetailPageMap;
