import { colors } from "@/lib/colors";

function IconHeartFilled({
  width = 24,
  height = 24,
  fill = colors.main[500],
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22.5 9.3125C22.5 15.875 12.7697 21.1869 12.3553 21.4062C12.2461 21.465 12.124 21.4958 12 21.4958C11.876 21.4958 11.7539 21.465 11.6447 21.4062C11.2303 21.1869 1.5 15.875 1.5 9.3125C1.50174 7.77146 2.11468 6.29404 3.20436 5.20436C4.29404 4.11468 5.77146 3.50174 7.3125 3.5C9.5 3.49753 10.9434 4.3325 12 5.73969C13.0566 4.3325 14.5 3.5 16.6875 3.5C18.2285 3.50174 19.706 4.11468 20.7956 5.20436C21.8853 6.29404 22.4983 7.77146 22.5 9.3125Z"
        fill={fill}
      />
    </svg>
  );
}

export default IconHeartFilled;
