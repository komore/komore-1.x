/**
 * TODO
 * @returns
 */
export function stringToLines(): (str: string) => Array<string> {
  return str => str.split('\n');
}
