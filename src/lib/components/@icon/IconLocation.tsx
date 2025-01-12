import { colors } from "@/lib/colors";

function IconLocation({
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
      <circle cx="12" cy="12" r="9.25" stroke={fill} strokeWidth="1.5" />
      <path d="M12 17V22" stroke={fill} strokeWidth="1.5" />
      <path d="M12 2V7" stroke={fill} strokeWidth="1.5" />
      <path d="M7 12L2 12" stroke={fill} strokeWidth="1.5" />
      <path d="M22 12L17 12" stroke={fill} strokeWidth="1.5" />
      <path
        d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
        fill={fill}
      />
    </svg>
  );
}

export default IconLocation;
