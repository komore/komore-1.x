import { type ErrorFromCreator } from './creator/error-from-creator';
import { isKomoreError } from './is-komore-error';
import { type ErrorFromType } from './type/error-from-type';
import { type GenericErrorType } from './type/generic-error-type';

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
 * Creates a function that tests whether an error is of a specific type and name
 *
 * @param errorType Error type
 * @param errorCode Error code
 * @returns Function that tests whether an error is of a specific type and name
 * @template ErrorType Error type
 * @template ErrorCode Error code
 */
export function isErrorOfType<ErrorType extends GenericErrorType, ErrorCode extends keyof ErrorType & string>(
  errorType: ErrorType,
  errorCode: ErrorCode
): (error: unknown) => error is ErrorFromCreator<ErrorType[ErrorCode]>;

export function isErrorOfType<
  ErrorType extends GenericErrorType,
  ErrorCode extends keyof ErrorType & string = keyof ErrorType & string,
>(errorType: ErrorType, errorCode?: ErrorCode): (error: unknown) => error is ErrorFromCreator<ErrorType[ErrorCode]> {
  return (error): error is ErrorFromCreator<ErrorType[ErrorCode]> => {
    if (!isKomoreError(error)) {
      return false;
    }

    // TODO:
    // this doesn't check for collisions with similar error codes across types/domains
    // keep the domain as an internal symbol in the error type?
    // keep the type as an internal symbol in the error instance?
    // (keeping the type directly on the error instance can cause cyclic issues)
    const { code } = error;
    return code in errorType && (errorCode === undefined || code === errorCode);
  };
}
