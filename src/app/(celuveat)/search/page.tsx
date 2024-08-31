import IconArrowLeft from '@/components/@icon/IconArrowLeft';
import IconSearch from '@/components/@icon/IconSearch';
import { colors } from '@/constants/colors';
import Link from 'next/link';

const SearchPage = () => {
  return (
    <main>
      <div className="mt-24 flex items-center gap-12 px-20">
        <Link href="/">
          <IconArrowLeft width={24} height={24} fill={colors.gray[800]} />
        </Link>
        <input
          className="border-1 h-48 flex-1 rounded-[10px] border border-main-600 px-14 body-15-rg focus:outline-none"
          placeholder="원하는 식당를 검색해보세요"
          autoFocus
        />
      </div>

      <hr className="mt-16 h-1 w-full bg-gray-200" />

      <ul>
        <li className="flex items-center px-20 py-[15px]">
          <IconSearch width={20} height={20} fill={colors.gray[600]} />
          <div>
            <span className="ml-8 text-gray-900 body-16-md">성수동</span>
            <span className="ml-4 text-gray-600 caption-12-rg">지역</span>
          </div>
        </li>
      </ul>
    </main>
  );
};

export default SearchPage;