/**
 * Creates a function that tests whether an array length is within a minimum and maximum length range
 *
 * @param minimumLength Minimum length
 * @param maximumLength Maximum length
 * @returns Function that tests whether an array length is between `minimumLength` and `maximumLength` (included)
 */
export function isArrayLengthBetween(
  minimumLength: number,
  maximumLength: number
): (array: ReadonlyArray<unknown>) => boolean {
  return array => minimumLength <= array.length && array.length <= maximumLength;
}
