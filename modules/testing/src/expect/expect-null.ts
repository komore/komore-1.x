import { UnmetExpectationError } from '../error/unmet-expectation-error';

/**
 * Asserts that a value is null
 *
 * ```ts
 * value === null
 * ```
 *
 * @param value Value
 */
export function expectNull<T>(value: T | null): asserts value is null {
  if (value !== null) {
    throw new UnmetExpectationError({ type: 'null' });
  }
}
