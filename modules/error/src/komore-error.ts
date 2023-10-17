import { type TypeSchemaType } from '@komore/typescript';

import { type ErrorType } from './error-type';
import { type GenericErrorGroup } from './group/generic-error-group';
import { type ErrorGroupDefinitions } from './group/error-group-definitions';

/**
 * Komore error
 *
 * @template ErrorGroupType Error group type
 * @template ErrorCode Error code
 * @private
 */
export class KomoreError<
    ErrorGroupType extends GenericErrorGroup,
    ErrorCode extends keyof ErrorGroupDefinitions<ErrorGroupType>,
  >
  extends Error
  implements ErrorType<ErrorGroupType, ErrorCode>
{
  override readonly name = 'KomoreError';
  readonly code: ErrorCode;
  readonly context: TypeSchemaType<ErrorGroupDefinitions<ErrorGroupType>[ErrorCode]>;
  readonly group: ErrorGroupType;

  /**
   * Class constructor
   *
   * @param message Message
   * @param errorGroup Error group
   * @param errorCode Error code
   * @param errorContext Error context
   */
  constructor(
    message: string,
    errorGroup: ErrorGroupType,
    errorCode: ErrorCode,
    errorContext: TypeSchemaType<ErrorGroupDefinitions<ErrorGroupType>[ErrorCode]>
  ) {
    super(message);
    this.code = errorCode;
    this.context = errorContext;
    this.group = errorGroup;
  }
}
