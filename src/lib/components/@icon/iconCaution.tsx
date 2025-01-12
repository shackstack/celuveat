import { colors } from "@/lib/colors";

function IconCaution({
  width = 24,
  height = 24,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 65 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="26.6667"
        cy="26.6667"
        r="24.6667"
        transform="matrix(1 0 0 -1 5.83334 58.6667)"
        stroke={colors.gray[200]}
        strokeWidth="4"
      />
      <path
        d="M32.5 40C33.9728 40 35.1667 41.1939 35.1667 42.6666C35.1667 44.1394 33.9728 45.3333 32.5 45.3333C31.0273 45.3333 29.8333 44.1394 29.8333 42.6666C29.8333 41.1939 31.0273 40 32.5 40Z"
        fill={colors.gray[200]}
      />
      <path
        d="M32.5 34.6667V18.6667"
        stroke={colors.gray[200]}
        strokeWidth="4"
      />
    </svg>
  );
}

export default IconCaution;
