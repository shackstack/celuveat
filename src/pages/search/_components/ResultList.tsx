import { useSearchResultQuery } from "@/hooks/server/search";
import { colors } from "@/lib/colors";
import IconHere from "@/lib/components/@icon/IconHere";
import IconSearch from "@/lib/components/@icon/IconSearch";
import Avatar from "@/lib/components/Avatar";
import { Link } from "react-router-dom";

function highlightMatch(text: string, query: string) {
  if (!query) return text;
  const parts = text.split(new RegExp(`(${query})`, "gi"));
  return (
    <>
      {parts.map((part) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <span className="text-main-700">{part}</span>
        ) : (
          part
        )
      )}
    </>
  );
}

const ResultList = ({ searchValue }: { searchValue: string }) => {
  const { data } = useSearchResultQuery(searchValue);

  return (
    <ul>
      {data && data.regionResults.length > 0 && (
        <li>
          <h2 className="mt-12 px-20 text-gray-800 body-14-md">지역</h2>
          <ul>
            {data.regionResults.map((region) => (
              <Link
                to={`/restaurants/region?region=${region.name}&centerX=${region.longitude}&centerY=${region.latitude}`}
                className="flex items-center px-20 py-[15px]"
                key={region.id}
              >
                <IconHere width={20} height={20} fill={colors.gray[400]} />
                <div>
                  <span className="ml-8 text-gray-900 body-16-md">
                    {highlightMatch(region.name, searchValue)}
                  </span>
                </div>
              </Link>
            ))}
          </ul>
          <hr className="mt-16 h-1 w-full bg-gray-100" />
        </li>
      )}
      {data && data.celebrityResults.length > 0 && (
        <li>
          <ul>
            <h2 className="mt-12 px-20 text-gray-800 body-14-md">셀럽</h2>
            {data?.celebrityResults.map((celeb) => (
              <Link
                to={`/celebs/${celeb.id}`}
                className="flex items-center px-20 py-[15px]"
                key={celeb.id}
              >
                <Avatar
                  imageUrl={celeb.profileImageUrl}
                  size={24}
                  alt={celeb.name}
                />
                <div>
                  <span className="ml-8 text-gray-900 body-16-md">
                    {highlightMatch(celeb.name, searchValue)}
                  </span>
                </div>
              </Link>
            ))}
          </ul>
          <hr className="mt-16 h-1 w-full bg-gray-100" />
        </li>
      )}
      {data && data.restaurantResults.length > 0 && (
        <li>
          <ul>
            <h2 className="mt-12 px-20 text-gray-800 body-14-md">맛집</h2>
            {data?.restaurantResults.map((restaurant) => (
              <Link
                to={`/restaurants/restaurant/${restaurant.id}`}
                className="flex items-center px-20 py-[15px]"
                key={restaurant.id}
              >
                <IconSearch width={20} height={20} fill={colors.gray[600]} />
                <div>
                  <span className="ml-8 text-gray-900 body-16-md">
                    {highlightMatch(restaurant.name, searchValue)}
                  </span>
                </div>
              </Link>
            ))}
          </ul>
          <hr className="mt-16 h-1 w-full bg-gray-100" />
        </li>
      )}
    </ul>
  );
};

export default ResultList;
