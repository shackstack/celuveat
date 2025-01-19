import { ComponentProps } from "react";

interface TabProps extends ComponentProps<"div"> {
  label: string;
  imageUrl?: string;
  isActive?: boolean;
}

function Tab({ label, imageUrl, isActive = false, ...props }: TabProps) {
  return (
    <div
      {...props}
      className={`flex h-40 w-fit flex-none items-center justify-center gap-[5px] rounded-[100px] border ${imageUrl ? "pl-6 pr-12" : "px-14"} ${isActive && "border-[1.5px] border-main-500"}`}
    >
      {imageUrl && (
        <img
          className="aspect-square rounded-full object-cover w-24 h-24"
          src={imageUrl}
          alt={label}
        />
      )}
      <span
        className={`text-gray-800 body-15-rg ${isActive && "font-[700_!important] text-main-500"}`}
      >
        {" "}
        {label}
      </span>
    </div>
  );
}

export default Tab;
