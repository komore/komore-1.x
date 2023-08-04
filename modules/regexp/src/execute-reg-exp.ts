/**
 * Executes a regular expression
 *
 * @param regExp Regular expression
 * @param string String
 * @returns Generator that emits each match
 */
export function* executeRegExp(regExp: RegExp, string: string): Generator<RegExpExecArray, void> {
  let matches: RegExpExecArray | null;

  while ((matches = regExp.exec(string)) !== null) {
    yield matches;
  }
}
