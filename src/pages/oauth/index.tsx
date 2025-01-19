import { api } from "@/utils/api";
import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const OauthPage = () => {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    console.log({ pathname, searchParams });
    const fetch = async () => {
      await api.get(
        `/social-login/${pathname.split("/").at(-1)}?authCode=${searchParams.get("code")}`
      );
    };

    fetch().then(() => {
      window.location.href = "/";
    });
  }, []);

  return (
    <div className="absolute left-1/2 top-1/3 -translate-x-1/2">
      <div className="h-96 w-96 rounded-full border-b-8 border-t-8 border-gray-200" />
      <div className="absolute left-0 top-0 h-96 w-96 animate-spin rounded-full border-b-8 border-t-8 border-main-700" />
    </div>
  );
};

export default OauthPage;
