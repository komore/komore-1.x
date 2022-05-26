import { UnmetExpectationError } from '../error/unmet-expectation-error';

/**
 * Asserts that a property exists in an object
 *
 * ```ts
 * propertyName in obj;
 * ```
 *
 * @param obj Object
 * @param propertyName Property name
 */
export function expectPropertyIn<T, PropertyName extends keyof T>(
  obj: T,
  propertyName: PropertyName
): asserts obj is T {
  if (!(propertyName in obj)) {
    throw new UnmetExpectationError({ type: 'propertyIn' });
  }
}
