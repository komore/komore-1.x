/**
 * Creates a function that pads a string from the end (right)
 *
 * @param maxLength Maximum length
 * @param fillString Fill string
 * @returns Function that pads a string from the end (right)
 * @keyword string
 * @keyword padEnd
 */
export function stringWithPaddedEnd(maxLength: number, fillString = ' '): (string: string) => string {
  return string => string.padEnd(maxLength, fillString);
}
