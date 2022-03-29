/**
 * TODO
 * @param regExp
 * @returns
 */
export function matchWith(regExp: string | RegExp): (str: string) => RegExpMatchArray | null {
  return str => str.match(regExp);
}
