/**
 * Creates a function that pads a string from the start (left)
 * @param maxLength Maximum length
 * @param fillString Fill string
 * @returns Function that pads a string from the start (left)
 * @keyword string
 * @keyword padStart
 */
export function toStringPaddedAtStart(maxLength: number, fillString = ' '): (str: string) => string {
  return str => str.padStart(maxLength, fillString);
}
