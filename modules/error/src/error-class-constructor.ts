import { ReadonlyRecord } from '@komore/typescript';
import { ErrorClass } from './error-class';

/**
 * Error class constructor
 *
 * @template ErrorGroupName Error group name
 * @template ErrorContextByCode Error context by code
 */
export interface ErrorClassConstructor<
  ErrorGroupName extends string,
  ErrorContextByCode extends ReadonlyRecord<string, unknown>
> {
  /**
   * Instantiates a new error
   *
   * @param code Error code
   * @template ErrorCode Error code
   */
  new <ErrorCode extends keyof ErrorContextByCode>(code: ErrorCode): ErrorClass<
    ErrorGroupName,
    ErrorCode,
    ErrorContextByCode
  >;
}
