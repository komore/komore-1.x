import { UnmetExpectationError } from '../error/unmet-expectation-error';

/**
 * Asserts that a value is truthy
 *
 * ```ts
 * value
 * ```
 *
 * @param value Value
 */
export function expectTruthy(value: unknown): void {
  if (!value) {
    throw new UnmetExpectationError({ type: 'truthy' });
  }
}
