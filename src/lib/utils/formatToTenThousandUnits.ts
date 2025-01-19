export const formatToTenThousandUnits = (number: number): string => {
  const formattedNumber = number / 10000;

  if (formattedNumber < 10) {
    return `${formattedNumber.toFixed(1)}만`;
  }
  return `${Math.round(formattedNumber)}만`;
};
