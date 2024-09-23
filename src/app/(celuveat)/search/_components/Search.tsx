'use client';

import IconSearch from '@/components/@icon/IconSearch';
import { colors } from '@/constants/colors';
import IconArrowLeftGoBack from './IconArrowLeftGoBack';
import { ChangeEvent, useState } from 'react';
import { getSearchResult } from '@/app/(actions)/search/actions';
import { SearchResult } from '@/@types';

function Search() {
  const [data, setData] = useState<SearchResult>();

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match(/[^가-힣\s]/)) {
      return;
    }

    const newData = await getSearchResult(e.target.value);
    setData(newData);
  };

  return (
    <main>
      <div className="flex items-center gap-12 px-20 pt-24">
        <IconArrowLeftGoBack />
        <input
          className="border-1 h-48 flex-1 rounded-[10px] border border-main-600 px-14 body-15-rg focus:outline-none"
          placeholder="원하는 식당를 검색해보세요"
          onChange={handleChange}
          autoFocus
        />
      </div>

      <hr className="mt-16 h-1 w-full bg-gray-200" />

      <ul>
        {data?.regionResults.map(region => (
          <li className="flex items-center px-20 py-[15px]">
            <IconSearch width={20} height={20} fill={colors.gray[600]} />
            <div>
              <span className="ml-8 text-gray-900 body-16-md">{region.name}</span>
              <span className="ml-4 text-gray-600 caption-12-rg">지역</span>
            </div>
          </li>
        ))}
        {data?.celebrityResults.map(celeb => (
          <li className="flex items-center px-20 py-[15px]">
            <IconSearch width={20} height={20} fill={colors.gray[600]} />
            <div>
              <span className="ml-8 text-gray-900 body-16-md">{celeb.name}</span>
              <span className="ml-4 text-gray-600 caption-12-rg">셀럽</span>
            </div>
          </li>
        ))}
        {data?.restaurantResults.map(restaurant => (
          <li className="flex items-center px-20 py-[15px]" key={restaurant.id}>
            <IconSearch width={20} height={20} fill={colors.gray[600]} />
            <div>
              <span className="ml-8 text-gray-900 body-16-md">{restaurant.name}</span>
              <span className="ml-4 text-gray-600 caption-12-rg">맛집</span>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Search;
