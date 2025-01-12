import { colors } from "@/lib/colors";

function IconHere({
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
      <path
        d="M20.25 10.8421C20.25 13.0093 18.8278 15.5982 16.9441 17.8576C16.0179 18.9686 15.0099 19.9639 14.0736 20.7448C13.2712 21.4141 12.551 21.9011 12 22.1765C11.449 21.9011 10.7288 21.4141 9.9264 20.7448C8.99015 19.9639 7.98213 18.9686 7.05585 17.8576C5.17224 15.5982 3.75 13.0093 3.75 10.8421C3.75 6.38542 7.43108 2.75 12 2.75C16.5689 2.75 20.25 6.38542 20.25 10.8421Z"
        stroke={fill}
        strokeWidth="1.5"
      />
      <circle cx="12" cy="11" r="2.25" stroke={fill} strokeWidth="1.5" />
    </svg>
  );
}

export default IconHere;
