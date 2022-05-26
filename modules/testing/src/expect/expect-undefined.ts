import { UnmetExpectationError } from '../error/unmet-expectation-error';

/**
 * Asserts that a value is not defined
 *
 * ```ts
 * value === undefined
 * ```
 *
 * @param value Value
 */
export function expectUndefined<T>(value: T | undefined): asserts value is undefined {
  if (value !== undefined) {
    throw new UnmetExpectationError({ type: 'undefined' });
  }
}
