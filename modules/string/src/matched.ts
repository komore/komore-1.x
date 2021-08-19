/**
 * Tests whether a regular expression match succeeded
 * @param regExpMatchArray Regular expression match array
 * @returns true if the regular expression match succeeded
 */
export function matched(regExpMatchArray: RegExpMatchArray | null): regExpMatchArray is RegExpMatchArray {
  return regExpMatchArray !== null;
}
