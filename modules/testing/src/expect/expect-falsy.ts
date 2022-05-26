import { UnmetExpectationError } from '../error/unmet-expectation-error';

/**
 * Asserts that a value is falsy
 *
 * ```ts
 * !value
 * ```
 *
 * @param value Value
 */
export function expectFalsy(value: unknown): void {
  if (value) {
    throw new UnmetExpectationError({ type: 'falsy' });
  }
}
