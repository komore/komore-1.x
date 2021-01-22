/**
 * Asserts a condition
 * @param condition Condition
 * @param message Message or error builder
 */
export function assert(condition: any, message: string | (() => Error)): asserts condition {
  if (!condition) {
    if (typeof message === 'string') {
      throw new Error(message);
    } else {
      throw message();
    }
  }
}
