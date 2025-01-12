interface IconThumbsUpFilledProps extends React.SVGProps<SVGSVGElement> {}

function IconThumbsUpFilled({ width = 24, height = 24, fill = 'none', ...props }: IconThumbsUpFilledProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.7954 3.65024C15.322 4.92051 15.3663 6.83656 14.6696 9.58417L20.3163 9.58415C21.1478 9.58415 21.7391 10.3929 21.487 11.1852L18.4052 20.8709C18.243 21.3808 17.7695 21.727 17.2344 21.727H4.50006C3.82153 21.727 3.27148 21.177 3.27148 20.4984V11.0513C3.27148 10.2828 3.76931 9.65709 4.40524 9.3858C5.43628 8.94594 6.8249 8.10998 8.09031 6.94193C9.356 5.77361 10.4603 4.30862 10.9893 2.62028C11.1124 2.22729 11.4723 1.80467 12.0402 1.77524C13.1039 1.7201 14.2228 2.26888 14.7954 3.65024Z"
        fill={fill}
      />
    </svg>
  );
}

export default IconThumbsUpFilled;
