import { colors } from "@/lib/colors";

function IconAlarm({
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
        d="M19.0735 14.75V14.8926L19.1258 15.0252L20.2631 17.9083C20.3278 18.0723 20.2069 18.25 20.0305 18.25H3.96945C3.7931 18.25 3.67218 18.0723 3.73689 17.9083L4.87415 15.0252L4.92647 14.8926V14.75V9.82353C4.92647 5.91693 8.0934 2.75 12 2.75C15.9066 2.75 19.0735 5.91693 19.0735 9.82353V14.75Z"
        stroke={fill}
        strokeWidth="1.5"
      />
      <path
        d="M14.5 19C14.5 20.3807 13.3807 21.5 12 21.5C10.6193 21.5 9.5 20.3807 9.5 19"
        stroke={fill}
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default IconAlarm;
