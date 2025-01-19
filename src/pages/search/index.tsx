import { colors } from "@/lib/colors";
import IconArrowLeft from "@/lib/components/@icon/IconArrowLeft";
import { useState, ChangeEvent, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import ResultList from "./_components/ResultList";
import { Lottie } from "@toss/lottie";

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState<string>(" ");

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match(/[^가-힣\s]/)) {
      return;
    }

    setSearchValue(e.target.value);
  };

  return (
    <main>
      <div className="flex items-center gap-12 px-20 pt-24">
        <IconArrowLeft
          width={24}
          height={24}
          fill={colors.gray[800]}
          onClick={() => {
            navigate(-1);
          }}
        />
        <input
          className="border-1 h-48 flex-1 rounded-[10px] border border-main-600 px-14 body-15-rg focus:outline-none"
          placeholder="원하는 식당를 검색해보세요"
          onChange={handleChange}
          autoFocus
        />
      </div>

      <hr className="mt-16 h-10 w-full bg-gray-100" />
      <Suspense
        fallback={
          <div className="w-full mt-20 flex justify-center items-center">
            <Lottie src="/public/spinner.json" width={120} height={120} />
          </div>
        }
      >
        <ResultList searchValue={searchValue} />
      </Suspense>
    </main>
  );
};

export default SearchPage;
