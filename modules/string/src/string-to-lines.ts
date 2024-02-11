/**
 * TODO
 *
 * @returns
 */
export function stringToLines(): (string: string) => Array<string> {
  return string => string.split('\n');
}
