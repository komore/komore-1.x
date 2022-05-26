import { UnmetExpectationError } from '../error/unmet-expectation-error';
import { buildStringDifferenceExpectationValue } from './value/build-string-difference-expectation-value';

/**
 * Asserts that a value is equal to another value
 *
 * ```ts
 * lhs === rhs
 * ```
 *
 * @param lhs Left-hand value
 * @param rhs Right-hand value
 */
export function expectEqual<T>(lhs: T, rhs: T): void {
  if (lhs === rhs) {
    return;
  }

  const expectationValue =
    typeof lhs === 'string' && typeof rhs === 'string'
      ? 'false\n' + buildStringDifferenceExpectationValue(lhs, rhs)
      : (typeof lhs === 'number' && typeof rhs === 'number') || (typeof lhs === 'bigint' && typeof rhs === 'bigint')
      ? 'false\n' + buildStringDifferenceExpectationValue(`${lhs}`, `${rhs}`)
      : false;

  throw new UnmetExpectationError({ type: 'equal', expectationValue });
}
