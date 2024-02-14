/**
 * Returns a random number between a minimum and maximum (excluded) value
 *
 * @param range Range
 * @returns Random number within the range
 */
export function randomNumberBetween(range: { readonly minimum: number, readonly maximum: number }): number {
  const { minimum, maximum } = range;
  const difference = maximum - minimum;
  const randomValue = Math.random();
  return minimum + randomValue * difference;
}
