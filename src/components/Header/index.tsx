import IconArrowLeft from "@/lib/components/@icon/IconArrowLeft";
import { useNavigate } from "react-router-dom";

function Header({ title, withBack }: { title: string; withBack?: boolean }) {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-[58px] w-full items-center justify-center border-b-[1px] border-b-[#Divider]">
      {withBack && (
        <IconArrowLeft
          className="top-18 absolute left-20"
          onClick={() => {
            navigate(-1);
          }}
          width={24}
          height={24}
        />
      )}
      <h1 className="title-20-bold">{title}</h1>
    </div>
  );
}

export default Header;
