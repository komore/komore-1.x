import { type UnaryGuardFunction } from './unary-function';

/**
 * Creates a function that tests whether a value is an instance of a given class
 *
 * @param instanceClass Instance class
 * @returns Function that tests whether a value is an instance of the given class
 * @template T Instance type
 */
export function isInstanceOf<T>(instanceClass: new (...args: ReadonlyArray<any>) => T): UnaryGuardFunction<unknown, T> {
  return (value: unknown): value is T => value instanceof instanceClass;
}
