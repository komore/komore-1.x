import { SpecificationNotPreprocessedError } from '../error/specification-not-preprocessed-error';

/**
 * Asserts that an exception has been thrown, and returns it
 *
 * @returns Thrown exception
 */
export function thrown(): unknown;

/**
 * Asserts that an exception with the specified name has been thrown, and returns it
 *
 * ```ts
 * class ErrorClass extends Error {
 *   readonly name = 'MyError';
 * }
 *
 * const e = thrown('MyError');
 * ```
 *
 * @param name Exception name
 * @tip Favor passing the class rather than the error name, so that the type can be inferred
 */
export function thrown(name: string): unknown;

/**
 * Asserts that an exception of the specified class has been thrown, and returns it
 *
 * @param errorClass Error class
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function thrown<T, C extends new (...args: any[]) => T>(errorClass: C): C;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function thrown<T, C extends new (...args: any[]) => T>(_?: C | string): T {
  throw new SpecificationNotPreprocessedError('thrown()');
}
