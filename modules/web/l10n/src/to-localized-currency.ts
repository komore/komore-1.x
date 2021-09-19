/**
 * Creates a function that localizes a currency using a number format
 * @param numberFormat Number format
 * @returns Function that localizes a currency using the number format
 */
export function toLocalizedCurrency(numberFormat: Intl.NumberFormat): (value: number) => string {
  return value => numberFormat.format(value);
}
