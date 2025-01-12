import { colors } from "@/lib/colors";

function IconMapOutlined({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.8886 3.44223C8.25449 3.28978 8.6613 3.26606 9.04243 3.37495L15.4086 5.19385C15.457 5.20769 15.5085 5.20657 15.5563 5.19064L19.9466 3.72721C21.0798 3.34949 22.25 4.19293 22.25 5.38741V16.8333C22.25 17.5398 21.8252 18.177 21.1731 18.4487L16.1114 20.5577C15.7455 20.7102 15.3387 20.7339 14.9576 20.625L8.59142 18.8061C8.54298 18.7923 8.49148 18.7934 8.44368 18.8093L4.0534 20.2728C2.92022 20.6505 1.75 19.807 1.75 18.6126V7.16665C1.75 6.46017 2.17479 5.82299 2.82692 5.55126L7.8886 3.44223ZM3.40385 6.93588L7.75 5.12498V17.4594L3.57906 18.8497C3.41717 18.9037 3.25 18.7832 3.25 18.6126V7.16665C3.25 7.06572 3.31068 6.9747 3.40385 6.93588ZM14.75 19.0057L9.25 17.4343V4.99428L14.75 6.56571V19.0057ZM16.25 18.875L20.5962 17.0641C20.6893 17.0253 20.75 16.9342 20.75 16.8333V5.38741C20.75 5.21677 20.5828 5.09628 20.4209 5.15024L16.25 6.54055V18.875Z"
        fill={fill}
      />
    </svg>
  );
}

export default IconMapOutlined;
