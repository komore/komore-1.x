import { AssertionError } from './assertion-error';

/**
 * Asserts a condition
 *
 * @param condition Condition
 * @param message Message or error builder
 */
export function assert<T>(condition: T, message?: string | (() => Error)): asserts condition {
  if (!condition) {
    if (message === undefined || typeof message === 'string') {
      message;
      throw new AssertionError(message ?? 'assertion failed');
    } else {
      throw message();
    }
  }
}
