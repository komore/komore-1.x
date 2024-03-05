import { testingError } from '../testing.error';

/**
 * Asserts that a value is an instance of a type
 *
 * @param value Value
 * @param instanceClass Instance class
 * @param negate Whether to negate the test
 */
export function expectInstanceOf<T>(
  value: unknown,
  instanceClass: new (...args: ReadonlyArray<any>) => T,
  negate: boolean
): asserts value is T {
  if (value instanceof instanceClass || negate) {
    throw testingError.unmetExpectation({ type: 'instanceOf', expectationValue: false });
  }
}
