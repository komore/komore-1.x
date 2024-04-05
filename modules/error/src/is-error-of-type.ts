import { type TypeCreator } from '@komore/typescript';

import { type ErrorCreator } from './creator/error-creator';
import { type ErrorFromCreator } from './creator/error-from-creator';
import { isKomoreError } from './is-komore-error';
import { type ErrorFromType } from './type/error-from-type';
import { type ErrorType as GenericErrorType } from './type/error-type';

/**
 * Creates a function that tests whether an error is of a specific type
 *
 * @param errorType Error type
 * @returns Function that tests whether an error is of a specific type
 * @template ErrorType Error type
 */
export function isErrorOfType<ErrorType extends GenericErrorType>(
  errorType: ErrorType
): (error: unknown) => error is ErrorFromType<ErrorType>;

/**
 * Creates a function that tests whether an error is of a specific type and code
 *
 * @param errorType Error type
 * @returns Function that tests whether an error is of a specific type and code
 * @template ErrorCreatorType Error creator type
 */
export function isErrorOfType<ErrorCreatorType extends ErrorCreator<string, TypeCreator<any, any>>>(
  errorType: ErrorCreatorType
): (error: unknown) => error is ErrorFromCreator<ErrorCreatorType>;

export function isErrorOfType<
  ErrorTypeOrCreatorType extends GenericErrorType | ErrorCreator<string, TypeCreator<any, any>>,
>(errorType: ErrorTypeOrCreatorType): (error: unknown) => boolean {
  if ('code' in errorType) {
    const { code } = errorType;
    // TODO: include domain
    return error => isKomoreError(error) && error.code === code;
  } else {
    return error => {
      if (!isKomoreError(error)) {
        return false;
      }

      // TODO:
      // this doesn't check for collisions with similar error codes across types/domains
      // keep the domain as an internal symbol in the error type?
      // keep the type as an internal symbol in the error instance?
      // (keeping the type directly on the error instance can cause cyclic issues)
      // support expected code(s) as an optional param?
      const { code } = error;
      return code in errorType;
    };
  }
}
