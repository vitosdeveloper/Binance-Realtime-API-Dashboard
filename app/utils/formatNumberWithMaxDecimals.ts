export const formatNumberWithMaxDecimals = (
  number: number,
  maxDecimals: number
) => {
  const [integerPart, decimalPart] = number.toString().split('.');
  if (!decimalPart) {
    return `${integerPart}.${'0'.repeat(maxDecimals)}`;
  } else if (decimalPart.length < maxDecimals) {
    return `${integerPart}.${decimalPart}${'0'.repeat(
      maxDecimals - decimalPart.length
    )}`;
  } else if (decimalPart.length > maxDecimals) {
    return `${integerPart}.${decimalPart.slice(0, maxDecimals)}`;
  }
  return String(number);
};
