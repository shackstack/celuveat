import { colors } from "@/lib/colors";

function IconCall({
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
      <g clipPath="url(#clip0_254_45)">
        <rect width="24" height="24" fill="white" />
        <path
          d="M7.53405 15.611C14.7962 22.805 19.0429 21.8189 21.1826 18.6549C21.8854 17.6156 21.5001 16.251 20.5546 15.4262L18.8007 13.8964C18.1245 13.3065 17.1382 13.2393 16.3881 13.7319L14.6768 14.8558C13.8712 15.385 12.8027 15.2642 12.1355 14.5686L9.66228 11.9901C9.00467 11.3045 8.9201 10.2509 9.45994 9.46916L10.5182 7.93673C11.0428 7.17708 10.9793 6.15708 10.3645 5.46837L8.71891 3.6249C7.88497 2.69067 6.51592 2.31741 5.49223 3.03873C2.36463 5.24251 1.96434 9.37109 7.53405 15.611Z"
          stroke={fill}
          strokeWidth="1.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_254_45">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default IconCall;
