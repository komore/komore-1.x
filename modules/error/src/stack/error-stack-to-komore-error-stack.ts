/**
 * Returns a komore error stack, given an error stack
 *
 * This removes the first line of the stack trace itself, as it would point to the error creator
 *
 * @param errorStack Error stack
 * @returns komore error stack
 */
export function errorStackToKomoreErrorStack(errorStack: string): string {
  const stackLines = errorStack.split('\n');
  return stackLines[0] + '\n' + stackLines.slice(2).join('\n');
}
