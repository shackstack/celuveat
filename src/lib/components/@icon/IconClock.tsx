import { colors } from "@/lib/colors";

function IconClock({
  width = 24,
  height = 24,
  fill = colors.gray[300],
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
      <rect width="24" height="24" fill="white" />
      <circle cx="12" cy="12" r="9.25" stroke={fill} strokeWidth="1.5" />
      <path d="M12 6V12L15.5 15.5" stroke={fill} strokeWidth="1.5" />
    </svg>
  );
}

export default IconClock;
