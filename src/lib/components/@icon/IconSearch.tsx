import { colors } from "@/lib/colors";

function IconSearch({
  width = 24,
  height = 24,
  fill = colors.gray[800],
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="10.5" cy="10" r="7.25" stroke={fill} strokeWidth="1.5" />
      <path d="M15.5 15L21.5 21" stroke={fill} strokeWidth="1.5" />
    </svg>
  );
}

export default IconSearch;
