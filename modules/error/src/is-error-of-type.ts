import { GenericErrorInstanceType } from './generic-error-instance-type';
import { type ErrorGroupDefinitions } from './group/error-group-definitions';
import { type GenericErrorGroup } from './group/generic-error-group';
import { isKomoreError } from './is-komore-error';

/**
 * Creates a function that tests whether an error is of a certain type
 *
 * @param errorGroup Error group
 * @param errorCode Error code
 * @returns Function that tests whether an error is of a certain type
 * @template ErrorGroupType
 * @template ErrorCode
 */
export function isErrorOfType<
  ErrorType extends GenericErrorInstanceType,
  ErrorCode extends keyof ErrorGroupDefinitions<ErrorType['group']> = keyof ErrorGroupDefinitions<ErrorType['group']>,
>(
  errorType: ErrorType,
  errorCode?: ErrorCode
): (error: unknown) => error is ErrorInstanceType<ErrorGroupType, ErrorCode> {
  return (error): error is ErrorType => {
    if (!isKomoreError(error)) {
      return false;
    }

    const { group: category, code } = error;
    return category === errorGroup && (errorCode === undefined || code === errorCode);
  };
}
