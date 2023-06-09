/**
 * Creates a function that returns a specific line from a string
 *
 * @param lineNumber Line number
 * @returns Function that returns the specified line from a string
 */
export function stringToLine(lineNumber: number): (string: string) => string | undefined {
  if (!(0 < lineNumber)) {
    throw new Error(`invalid line number ${lineNumber} (must be greater than 0)`);
  }

  return string => {
    let nthNewLine = -1;
    let count: number;

    for (count = 1; count !== lineNumber; ++count) {
      nthNewLine = string.indexOf('\n', nthNewLine + 1);
      if (nthNewLine === -1) {
        break;
      }
    }

    if (count < lineNumber) {
      return undefined;
    }

    const lineStart = nthNewLine + 1;
    const nextNewLine = string.indexOf('\n', lineStart);
    const lineEnd =
      nextNewLine === -1 ? undefined : string.charAt(nextNewLine - 1) === '\r' ? nextNewLine - 1 : nextNewLine;

    return string.substring(lineStart, lineEnd);
  };
}
