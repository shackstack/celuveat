import { colors } from "@/lib/colors";

function IconHomeFilled({
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
      <path
        d="M20.6525 9.4507C20.8731 9.64067 21 9.91734 21 10.2085V19.9999C21 20.5522 20.5523 20.9999 20 20.9999H16C15.4477 20.9999 15 20.5522 15 19.9999V15C15 14.4477 14.5523 14 14 14H10C9.44772 14 9 14.4477 9 15V19.9999C9 20.5522 8.55228 20.9999 8 20.9999H4C3.44772 20.9999 3 20.5522 3 19.9999V10.2085C3 9.91734 3.12687 9.64067 3.34748 9.4507L11.3475 2.56181C11.7225 2.23884 12.2775 2.23884 12.6525 2.56181L20.6525 9.4507Z"
        fill={fill}
      />
    </svg>
  );
}

export default IconHomeFilled;
