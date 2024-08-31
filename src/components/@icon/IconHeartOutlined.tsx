import { colors } from '@/constants/colors';

const IconHeartOutlined = ({ width = 24, height = 24, fill = colors.gray[300] }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.3553 21.4062C12.7697 21.1869 22.5 15.875 22.5 9.3125C22.4983 7.77147 21.8853 6.29404 20.7956 5.20437C19.706 4.11469 18.2285 3.50174 16.6875 3.50001C15.1483 3.50001 13.9775 3.91216 13.0507 4.64667C12.6603 4.95605 12.3131 5.32263 12 5.73969C11.6869 5.32271 11.3399 4.95598 10.9495 4.64639C10.0227 3.9112 8.8518 3.49827 7.3125 3.50001C5.77146 3.50174 4.29404 4.11469 3.20436 5.20437C2.11468 6.29404 1.50174 7.77147 1.5 9.3125C1.5 15.875 11.2303 21.1869 11.6447 21.4062C11.7539 21.465 11.876 21.4958 12 21.4958C12.124 21.4958 12.2461 21.465 12.3553 21.4062ZM3 9.31336C3.00151 8.16986 3.45643 7.07362 4.26502 6.26503C5.07381 5.45624 6.17039 5.00129 7.31419 5C9.02472 4.99808 10.0249 5.60732 10.8005 6.64033L12 8.23792L13.1995 6.64033C13.9742 5.60861 14.9741 5.00021 16.6866 5.00001C17.8301 5.00151 18.9264 5.45643 19.735 6.26503C20.5437 7.07377 20.9987 8.17027 21 9.314M3 9.31336C3.00043 11.8924 4.96483 14.4724 7.40519 16.6096C9.29503 18.2646 11.2244 19.4406 12 19.8868C12.7756 19.4406 14.705 18.2646 16.5948 16.6096C19.0349 14.4727 20.9991 11.8928 21 9.314"
        fill={fill}
      />
    </svg>
  );
};

export default IconHeartOutlined;
