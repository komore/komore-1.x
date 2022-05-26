import { UnmetExpectationError } from '../error/unmet-expectation-error';

/**
 * Asserts that a value is greater than another value
 *
 * ```ts
 * lhs > rhs
 * ```
 *
 * @param lhs Left-hand value
 * @param rhs Right-hand value
 */
export function expectGreaterThan<T extends number | bigint | string>(lhs: T, rhs: T): void {
  if (!(lhs > rhs)) {
    throw new UnmetExpectationError({ type: 'greaterThan' });
  }
}
