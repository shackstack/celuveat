import { useSuspenseQuery } from "@tanstack/react-query";

import { getRepresentativeRegions } from "@/remotes/regions";

// 대표 지역 조회
export const useRepresentativeRegionsQuery = () =>
  useSuspenseQuery({
    queryKey: ["getRepresentativeRegions"],
    queryFn: getRepresentativeRegions,
  });
