import { type ReadonlyRecord } from '@komore/typescript';

/**
 * Error class
 *
 * @template GroupName Error group name
 * @template ErrorCode Error code
 * @template ErrorContextByCode Error context by code
 */
export interface ErrorClass<
  GroupName extends string,
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
  readonly name: GroupName;
}
