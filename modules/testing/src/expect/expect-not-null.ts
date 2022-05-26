import { UnmetExpectationError } from '../error/unmet-expectation-error';

/**
 * Asserts that a value is not null
 *
 * ```ts
 * value !== null
 * ```
 *
 * @param value Value
 */
export function expectNotNull<T>(value: T | null): asserts value is T {
  if (value === null) {
    throw new UnmetExpectationError({ type: 'notNull' });
  }
}
