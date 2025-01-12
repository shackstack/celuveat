import { colors } from "@/lib/colors";

function IconNotice({
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
        d="M10.5 6.00003L19.1286 2.54858C19.7855 2.28584 20.5 2.7696 20.5 3.47706V19.5905C20.5 20.2794 19.8198 20.762 19.1697 20.5344L10.5 17.5V6.00003Z"
        fill={fill}
      />
      <path
        d="M8 6.00003C8.55228 6.00003 9 6.44774 9 7.00003V21.2C9 21.6419 8.64183 22 8.2 22H6.8C6.35817 22 6 21.6419 6 21.2V17C4.34315 17 3 15.6569 3 14V8.53849C3 7.13654 4.13651 6.00003 5.53846 6.00003H8Z"
        fill={fill}
      />
    </svg>
  );
}

export default IconNotice;
