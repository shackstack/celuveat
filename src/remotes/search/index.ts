import { SearchResult } from '@/@types';
import { api } from '@/utils/api';

// 통합검색 조회
export const getSearchResult = async (name: string): Promise<SearchResult> => {
  return await api(`/search/integrated?name=${name}`);
};
