import { UnmetExpectationError } from '../error/unmet-expectation-error';

/**
 * Asserts that a value is defined
 *
 * ```ts
 * value !== undefined
 * ```
 *
 * @param value Value
 */
export function expectDefined<T>(value: T | undefined): asserts value is T {
  if (value === undefined) {
    throw new UnmetExpectationError({ type: 'defined', expectationValue: false });
  }
}
