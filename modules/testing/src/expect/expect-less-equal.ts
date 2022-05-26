import { UnmetExpectationError } from '../error/unmet-expectation-error';

/**
 * Asserts that a value is less than or equal to another value
 *
 * ```ts
 * lhs <= rhs
 * ```
 *
 * @param lhs Left-hand value
 * @param rhs Right-hand value
 */
export function expectLessEqual<T extends number | bigint | string>(lhs: T, rhs: T): void {
  if (!(lhs <= rhs)) {
    throw new UnmetExpectationError({ type: 'lessEqual' });
  }
}
