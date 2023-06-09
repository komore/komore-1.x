/**
 * Creates a function that pads a string from the start (left)
 *
 * @param maxLength Maximum length
 * @param fillString Fill string
 * @returns Function that pads a string from the start (left)
 * @keyword string
 * @keyword padStart
 */
export function stringWithPaddedStart(maxLength: number, fillString = ' '): (string: string) => string {
  return string => string.padStart(maxLength, fillString);
}
