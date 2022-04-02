/**
 * Creates a function that localizes a unit using a number format
 * @param numberFormat Number format
 * @returns Function that transforms emitted number values into localized unit strings
 */
export function numberToLocalizedUnit(numberFormat: Intl.NumberFormat): (value: number) => string {
  return value => numberFormat.format(value);
}
