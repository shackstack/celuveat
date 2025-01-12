import { colors } from "@/lib/colors";

function IconMapFilled({
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
        d="M22 4.48823C22 3.85749 21.3802 3.41213 20.7801 3.61158L15.398 5.40028L8.85202 3.53555C8.65016 3.47805 8.43471 3.49058 8.24093 3.57108L2.57036 5.9268C2.22498 6.07028 2 6.40674 2 6.77979V19.5118C2 20.1425 2.61977 20.5879 3.21992 20.3884L8.60201 18.5997L15.148 20.4644C15.3498 20.5219 15.5653 20.5094 15.7591 20.4289L21.4296 18.0732C21.775 17.9297 22 17.5933 22 17.2202V4.48823Z"
        fill={fill}
      />
    </svg>
  );
}

export default IconMapFilled;
