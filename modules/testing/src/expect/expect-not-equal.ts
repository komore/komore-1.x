import { UnmetExpectationError } from '../error/unmet-expectation-error';

/**
 * Asserts that two values are not equal
 *
 * ```ts
 * lhs !== rhs
 * ```
 *
 * @param value Value
 */
export function expectNotEqual<T>(lhs: T, rhs: T): void {
  if (lhs === rhs) {
    throw new UnmetExpectationError({ type: 'notEqual' });
  }
}
