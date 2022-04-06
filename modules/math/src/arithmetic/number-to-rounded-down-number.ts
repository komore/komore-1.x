/**
 * Returns the greatest integer less than or equal to the passed value
 *
 * @param value Value
 * @returns Greatest integer less than or equal to `value`
 * @see {@link Math.floor}
 */
export function numberToRoundedDownNumber(value: number): number {
  return Math.floor(value);
}
