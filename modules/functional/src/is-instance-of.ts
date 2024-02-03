import { type UnaryGuardFunction } from './unary-function';

/**
 * Creates a function that tests whether a value is an instance of a given class
 *
 * @param instanceClass Instance class
 * @returns Function that tests whether a value is an instance of the given class
 * @template T Instance type
 */
export function isInstanceOf<T>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  instanceClass: new (...args: any[]) => T
): UnaryGuardFunction<unknown, T> {
  return (value: unknown): value is T => value instanceof instanceClass;
}
