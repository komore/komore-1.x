/**
 * Tests whether a regular expression match and execution succeeded
 *
 * @param regExpArray Regular expression match array
 * @returns true if the regular expression match succeeded
 */
export function regExpMatched<T extends RegExpMatchArray | RegExpExecArray>(regExpArray: T | null): regExpArray is T {
  return regExpArray !== null;
}
