import { useSearchParams } from "react-router-dom";
import CelebIntroductionSection from "./_components/CelebIntroductionSection";
import CelebRestaurantSections from "./_components/CelebRestaurantSections";

const CelebDetailPage = () => {
  const [searchParams] = useSearchParams();

  return (
    <main className="px-20 pt-16 max-h-[100dvh] flex flex-col">
      <CelebIntroductionSection celebrityId={Number(searchParams.get("id"))} />
      <hr className="mt-28 h-1 w-full bg-gray-200" />
      <CelebRestaurantSections celebrityId={Number(searchParams.get("id"))} />
    </main>
  );
};

export default CelebDetailPage;
