import { type ErrorCreator, type ErrorFromCreator, type ErrorFromType, type GenericErrorType } from '@komore/error';
import { TypeCreator } from '@komore/typescript';

import { testingError } from '../testing.error';

/**
 * Asserts that an error has been thrown, and returns it
 *
 * @returns Thrown error
 */
export function thrown(): unknown;

/**
 * Asserts that an error with the specified message has been thrown, and returns it
 *
 * ```ts
 * when:
 * throw new Error('My error message');
 *
 * expect:
 * const e = thrown('My error message');
 * ```
 *
 * @param errorMessage Error message
 */
export function thrown(errorMessage: string): unknown;

/**
 * Asserts that an exception of the specified class has been thrown, and returns it
 *
 * @param errorClass Error class
 * @returns Error instance
 */
export function thrown<T, C extends new (...args: any[]) => T>(errorClass: C): T;

/**
 * Asserts that an error with a specific type has been thrown, and returns it
 *
 * @param errorType Error type
 * @returns Error instance
 */
export function thrown<ErrorType extends GenericErrorType>(errorType: ErrorType): ErrorFromType<ErrorType>;

/**
 * Asserts that a specific error has been thrown, and returns it
 *
 * @param errorType Error type
 * @returns Error instance
 */
export function thrown<ErrorCreatorType extends ErrorCreator<string, TypeCreator<any, any>>>(
  errorType: ErrorCreatorType
): ErrorFromCreator<ErrorCreatorType>;

export function thrown<T, C extends new (...args: any[]) => T>(_?: C | string): T {
  throw testingError.specificationNotPreprocessed({ expression: 'thrown()' });
}
