import { useCelebritiesInRestaurantsQuery } from "@/hooks/server/celebs";
import { useSearchParams } from "react-router-dom";
import Tab from "./Tab";
import useCoordinate from "@/hooks/useCoordinate";

function CelebrityFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { coordinate } = useCoordinate();
  const { data: celebrities } = useCelebritiesInRestaurantsQuery({
    category: searchParams.get("category") ?? undefined,
    celebrityId: searchParams.get("celebrityId")
      ? Number(searchParams.get("celebrityId"))
      : undefined,
    ...coordinate,
  });

  const onClickTab = (id: number | "전체") => {
    searchParams.set("celebrityId", id.toString());
    setSearchParams(searchParams, { replace: true });
  };

  return (
    <ul className="scrollbar-hide flex gap-6 overflow-scroll">
      <Tab
        label="전체"
        onClick={() => {
          searchParams.delete("celebrityId");
          setSearchParams(searchParams, { replace: true });
        }}
        isActive={!searchParams.get("celebrityId")}
      />
      {celebrities.map(({ id, name, profileImageUrl }) => (
        <Tab
          key={id}
          label={name}
          imageUrl={profileImageUrl}
          onClick={() => onClickTab(id)}
          isActive={Number(searchParams.get("celebrityId")) === id}
        />
      ))}
    </ul>
  );
}

export default CelebrityFilter;
