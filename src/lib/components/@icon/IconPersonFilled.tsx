import { colors } from "@/lib/colors";

function IconPersonFilled({
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
        d="M11.9999 13C4.9268 13 2.31413 16.5621 2.02704 21.1193C1.99646 21.6049 2.39436 22 2.88089 22H21.119C21.6055 22 22.0034 21.6049 21.9728 21.1193C21.6857 16.5621 19.0731 13 11.9999 13Z"
        fill={fill}
      />
      <path
        d="M11.9999 2.5C9.51466 2.5 7.49994 4.51472 7.49994 7C7.49994 9.48528 9.51466 11.5 11.9999 11.5C14.4852 11.5 16.4999 9.48528 16.4999 7C16.4999 4.51472 14.4852 2.5 11.9999 2.5Z"
        fill={fill}
      />
    </svg>
  );
}

export default IconPersonFilled;
