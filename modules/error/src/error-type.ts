import { type ReadonlyRecord } from '@komore/typescript';

/**
 * Error type
 *
 * @template ErrorGroupName Error group name
 * @template ErrorCode Error code
 * @template ErrorContextByCode Error context by code
 */
export interface ErrorType<
  ErrorGroupName extends string,
  ErrorCode extends keyof ErrorContextByCode,
  ErrorContextByCode extends ReadonlyRecord<string, unknown>
> extends Error {
  /**
   * Error code
   */
  readonly code: ErrorCode;
  /**
   * Error context
   */
  readonly context: ErrorContextByCode[ErrorCode];
  /**
   * Error group name
   */
  readonly name: ErrorGroupName;
}
