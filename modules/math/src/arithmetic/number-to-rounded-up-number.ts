/**
 * Returns the smallest integer greater than or equal to the passed value
 *
 * @param value Value
 * @returns Smallest integer greater than or equal to `value`
 * @see {@link Math.ceil}
 */
export function numberToRoundedUpNumber(value: number): number {
  return Math.ceil(value);
}
