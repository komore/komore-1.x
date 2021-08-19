/**
 * Creates a function that pads a string from the end (right)
 * @param maxLength Maximum length
 * @param fillString Fill string
 * @returns Function that pads a string from the end (right)
 */
 export function padEnd(maxLength: number, fillString = ' '): (str: string) => string {
    return str => str.padEnd(maxLength, fillString);
  }
  