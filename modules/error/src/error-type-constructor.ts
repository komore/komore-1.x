import { ReadonlyRecord } from '@komore/typescript';
import { ErrorType } from './error-type';

/**
 * Error type constructor
 *
 * @template ErrorGroupName Error group name
 * @template ErrorContextByCode Error context by code
 */
export interface ErrorTypeConstructor<
  ErrorGroupName extends string,
  ErrorContextByCode extends ReadonlyRecord<string, unknown>
> {
  /**
   * Instantiates a new error
   *
   * @param code Error code
   * @template ErrorCode Error code
   */
  new <ErrorCode extends keyof ErrorContextByCode>(code: ErrorCode): ErrorType<
    ErrorGroupName,
    ErrorCode,
    ErrorContextByCode
  >;
}
