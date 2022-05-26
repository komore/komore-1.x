import { UnmetExpectationError } from '../error/unmet-expectation-error';

/**
 * Asserts that a value is not NaN
 *
 * ```ts
 * isNaN(value)
 * ```
 *
 * @param value
 */
export function expectNaN(value: number): void {
  if (isNaN(value)) {
    throw new UnmetExpectationError({ type: 'NaN' });
  }
}
