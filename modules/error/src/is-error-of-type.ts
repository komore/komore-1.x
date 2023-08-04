import { type ErrorCategoryDefinitions } from './category/error-category-definitions';
import { type GenericErrorCategory } from './category/generic-error-category';
import { type ErrorType } from './error-type';
import { isKomoreError } from './is-komore-error';

/**
 * Creates a function that tests whether an error is of a certain type
 *
 * @param errorCategory Error category
 * @param errorCode Error code
 * @returns Function that tests whether an error is of a certain type
 */
export function isErrorOfType<
  ErrorCategoryType extends GenericErrorCategory,
  ErrorCode extends keyof ErrorCategoryDefinitions<ErrorCategoryType> = keyof ErrorCategoryDefinitions<ErrorCategoryType>
>(
  errorCategory: ErrorCategoryType,
  errorCode?: ErrorCode
): (error: unknown) => error is ErrorType<ErrorCategoryType, ErrorCode> {
  return (error): error is ErrorType<ErrorCategoryType, ErrorCode> => {
    if (!isKomoreError(error)) {
      return false;
    }

    const { category, code } = error;
    return category === errorCategory && (errorCode === undefined || code === errorCode);
  };
}
