import { type Domain } from '@komore/domain';
import { type ReadonlyRecord } from '@komore/typescript';

import { type ErrorCreator } from '../creator/error-creator';
import { type ErrorInstance } from '../error-instance';

/**
 * Error type
 *
 * @template DomainType Domain type
 * @template ErrorParametersByErrorCode Error parameters by error code
 */
export type ErrorType<DomainType extends Domain, ErrorParametersByErrorCode extends ReadonlyRecord<string, any>> = {
  /**
   * Creates a new error
   *
   * @param parameters Error parameters
   * @returns Error
   */
  readonly [ErrorCode in keyof ErrorParametersByErrorCode & string]: ErrorCreator<
    ErrorCode,
    ErrorParametersByErrorCode[ErrorCode] extends void
      ? () => ErrorInstance<DomainType, ErrorCode, ErrorParametersByErrorCode[ErrorCode]>
      : (
          parameters: ErrorParametersByErrorCode[ErrorCode]
        ) => ErrorInstance<DomainType, ErrorCode, ErrorParametersByErrorCode[ErrorCode]>
  >;
};
