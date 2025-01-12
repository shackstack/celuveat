import { colors } from "@/lib/colors";

function IconInfo({
  width = 24,
  height = 24,
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
      <circle
        cx="12"
        cy="12"
        r="9.25"
        stroke={colors.gray[200]}
        strokeWidth="1.5"
      />
      <path
        d="M12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9Z"
        fill={colors.gray[400]}
      />
      <path d="M12 11V17" stroke={colors.gray[400]} strokeWidth="1.5" />
    </svg>
  );
}

export default IconInfo;
