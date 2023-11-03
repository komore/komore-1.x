import { type TypeSchemaType } from '@komore/typescript';

import { type ErrorTypeDefinitions } from './type/error-type-definitions';
import { type GenericErrorType } from './type/generic-error-type';

/**
 * Error instance
 *
 * @template ErrorType Error type
 * @template ErrorCode Error code
 */
export interface ErrorInstance<
  ErrorType extends GenericErrorType,
  ErrorCode extends keyof ErrorTypeDefinitions<ErrorType>,
> extends Error {
  /**
   * Error code
   */
  readonly code: ErrorCode;
  /**
   * Error context
   */
  readonly context: TypeSchemaType<ErrorTypeDefinitions<ErrorType>[ErrorCode]>;
  /**
   * Error name
   */
  readonly name: 'KomoreError';
  /**
   * Error type
   */
  readonly type: ErrorType;
}
