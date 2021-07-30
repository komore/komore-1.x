
export function match(regExp: string | RegExp): (str: string) => RegExpMatchArray | null {
  return str => str.match(regExp);
}
