import { UnmetExpectationError } from '../error/unmet-expectation-error';

/**
 * Asserts that a value is an instance of a type
 *
 * @param value Value
 * @param instanceClass Instance class
 * @param negate Whether to negate the test
 */
export function expectInstanceOf<T>(
  value: unknown,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  instanceClass: new (...args: any[]) => T,
  negate: boolean
): asserts value is T {
  if (value instanceof instanceClass || negate) {
    throw new UnmetExpectationError({ type: 'instanceOf', expectationValue: false });
  }
}
