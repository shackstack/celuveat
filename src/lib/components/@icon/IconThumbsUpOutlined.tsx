import { colors } from "@/lib/colors";

interface IconThumbsUpOutlinedProps extends React.SVGProps<SVGSVGElement> {}

function IconThumbsUpOutlined({
  width = 24,
  height = 24,
  fill = colors.gray[700],
  ...props
}: IconThumbsUpOutlinedProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="24" height="24" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.3215 3.23556C11.6747 5.15974 10.4251 6.76974 9.07865 8.01265C7.69016 9.29431 6.16047 10.2212 4.97702 10.7261C4.80536 10.7993 4.72863 10.9418 4.72863 11.0513V20.2699H17.0673L20.0037 11.0413L14.3826 11.0413C13.5539 11.0413 12.9863 10.25 13.1909 9.48097C13.9299 6.70298 13.8112 5.08112 13.4493 4.20822C13.1653 3.5229 12.7276 3.27798 12.3215 3.23556ZM14.6696 9.58417C15.3663 6.83656 15.322 4.92051 14.7954 3.65024C14.2228 2.26888 13.1039 1.7201 12.0402 1.77524C11.4723 1.80468 11.1124 2.22729 10.9893 2.62028C10.4603 4.30862 9.356 5.77361 8.09031 6.94193C6.8249 8.10997 5.43628 8.94594 4.40524 9.3858C3.76931 9.65709 3.27148 10.2828 3.27148 11.0513V20.4984C3.27148 21.177 3.82153 21.727 4.50006 21.727H17.2344C17.7695 21.727 18.243 21.3808 18.4052 20.8709L21.487 11.1852C21.7391 10.3929 21.1478 9.58415 20.3163 9.58415L14.6696 9.58417Z"
        fill={fill}
      />
    </svg>
  );
}

export default IconThumbsUpOutlined;
