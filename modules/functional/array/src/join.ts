/**
 * Creates a string that holds all the elements of an array separated by the specified separator string
 * @param separator String used to separate the elements
 * @returns String holding all the elements
 */
export function join(separator: string = ','): (array: ReadonlyArray<unknown>) => string {
  return array => array.join(separator);
}
