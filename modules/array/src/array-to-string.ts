/**
 * Creates a function that concatenates the string representations of all the elements in an array, with a separator
 *
 * @param separator String used to separate the elements
 * @returns Function that concatenates the string repressentations of all the elements in an array, with the separator
 */
export function arrayToString(separator = ','): (array: ReadonlyArray<unknown>) => string {
  return array => array.join(separator);
}
