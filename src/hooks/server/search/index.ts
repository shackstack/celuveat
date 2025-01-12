import { useSuspenseQuery } from "@tanstack/react-query";

import { getSearchResult } from "@/remotes/search";

// 통합검색 조회

export const useSearchResultQuery = (name: string) =>
  useSuspenseQuery({
    queryKey: ["getSearchResult", name],
    queryFn: () => getSearchResult(name),
  });
