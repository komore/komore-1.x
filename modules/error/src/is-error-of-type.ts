import { type ErrorType } from './error-type';
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
  ErrorGroupType extends GenericErrorGroup,
  ErrorCode extends keyof ErrorGroupDefinitions<ErrorGroupType> = keyof ErrorGroupDefinitions<ErrorGroupType>,
>(
  errorGroup: ErrorGroupType,
  errorCode?: ErrorCode
): (error: unknown) => error is ErrorType<ErrorGroupType, ErrorCode> {
  return (error): error is ErrorType<ErrorGroupType, ErrorCode> => {
    if (!isKomoreError(error)) {
      return false;
    }

    const { group: category, code } = error;
    return category === errorGroup && (errorCode === undefined || code === errorCode);
  };
}
