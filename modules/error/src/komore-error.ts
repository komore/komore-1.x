import { type TypeSchemaType } from '@komore/typescript';

import { type ErrorInstance } from './error-instance';
import { type ErrorTypeDefinitions } from './type/error-type-definitions';
import { type GenericErrorType } from './type/generic-error-type';

/**
 * Komore error
 *
 * @template ErrorType Error type
 * @template ErrorCode Error code
 * @private
 */
export class KomoreError<ErrorType extends GenericErrorType, ErrorCode extends keyof ErrorTypeDefinitions<ErrorType>>
  extends Error
  implements ErrorInstance<ErrorType, ErrorCode>
{
  override readonly name = 'KomoreError';
  readonly code: ErrorCode;
  readonly context: TypeSchemaType<ErrorTypeDefinitions<ErrorType>[ErrorCode]>;
  readonly type: ErrorType;

  /**
   * Class constructor
   *
   * @param message Message
   * @param errorType Error group
   * @param errorCode Error code
   * @param errorContext Error context
   */
  constructor(
    message: string,
    errorType: ErrorType,
    errorCode: ErrorCode,
    errorContext: TypeSchemaType<ErrorTypeDefinitions<ErrorType>[ErrorCode]>
  ) {
    super(message);
    this.code = errorCode;
    this.context = errorContext;
    this.type = errorType;
  }
}
