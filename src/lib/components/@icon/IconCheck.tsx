import { colors } from "@/lib/colors";

function IconCheck({
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
      <path
        d="M20 6L9 17L4 12"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

export default IconCheck;
