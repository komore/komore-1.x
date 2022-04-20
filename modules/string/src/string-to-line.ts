/**
 * Creates a function that returns a specific line from a string
 *
 * @param lineNumber Line number
 * @returns Function that returns the specified line from a string
 */
export function stringToLine(lineNumber: number): (str: string) => string | undefined {
  if (lineNumber < 1) {
    throw new Error(`invalid line number ${lineNumber}`);
  }

  return str => {
    let nthNewLine = -1;
    let count: number;

    for (count = 1; count !== lineNumber; ++count) {
      nthNewLine = str.indexOf('\n', nthNewLine + 1);
      if (nthNewLine === -1) {
        break;
      }
    }

    if (count < lineNumber) {
      return undefined;
    }

    const lineStart = nthNewLine + 1;
    const nextNewLine = str.indexOf('\n', lineStart);
    const lineEnd =
      nextNewLine === -1 ? undefined : str.charAt(nextNewLine - 1) === '\r' ? nextNewLine - 1 : nextNewLine;

    return str.substring(lineStart, lineEnd);
  };
}
