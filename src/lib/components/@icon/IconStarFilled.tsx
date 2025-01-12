import { colors } from "@/lib/colors";

function IconStarFilled({
  width = 16,
  height = 16,
  fill = colors.sub.orange,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.55163 0.908492C7.73504 0.536869 8.26496 0.53687 8.44837 0.908493L10.2348 4.52821C10.3076 4.67578 10.4484 4.77807 10.6113 4.80173L14.6059 5.38218C15.016 5.44177 15.1797 5.94576 14.883 6.23503L11.9925 9.05258C11.8746 9.16745 11.8208 9.33295 11.8487 9.49515L12.531 13.4736C12.6011 13.8821 12.1724 14.1935 11.8055 14.0007L8.23267 12.1223C8.08701 12.0457 7.91299 12.0457 7.76733 12.1223L4.19445 14.0007C3.82764 14.1935 3.39892 13.8821 3.46898 13.4736L4.15134 9.49515C4.17916 9.33295 4.12538 9.16745 4.00754 9.05258L1.11702 6.23503C0.820263 5.94576 0.984019 5.44177 1.39413 5.38218L5.38873 4.80173C5.55158 4.77807 5.69236 4.67578 5.76519 4.52821L7.55163 0.908492Z"
        fill={fill}
      />
    </svg>
  );
}

export default IconStarFilled;
