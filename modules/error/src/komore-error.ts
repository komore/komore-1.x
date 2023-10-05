import { type GenericErrorCategory } from './category/generic-error-category';
import { type ErrorCategoryDefinitions } from './category/error-category-definitions';
import { type ErrorDefinitionProperties } from './definition/error-definition-properties';
import { type ErrorType } from './error-type';

/**
 * Komore error
 *
 * @template ErrorCategoryType Error category type
 * @template ErrorCode Error code
 * @private
 */
export class KomoreError<
    ErrorCategoryType extends GenericErrorCategory,
    ErrorCode extends keyof ErrorCategoryDefinitions<ErrorCategoryType>,
  >
  extends Error
  implements ErrorType<ErrorCategoryType, ErrorCode>
{
  override readonly name = 'KomoreError';
  readonly group: ErrorCategoryType;
  readonly code: ErrorCode;
  readonly context: ErrorDefinitionProperties<ErrorCategoryDefinitions<ErrorCategoryType>[ErrorCode]>;

  /**
   * Class constructor
   *
   * @param message Message
   * @param errorCategory Error category
   * @param errorCode Error code
   * @param errorContext Error context
   */
  constructor(
    message: string,
    errorCategory: ErrorCategoryType,
    errorCode: ErrorCode,
    errorContext: ErrorDefinitionProperties<ErrorCategoryDefinitions<ErrorCategoryType>[ErrorCode]>
  ) {
    super(message);
    this.group = errorCategory;
    this.code = errorCode;
    this.context = errorContext;
  }
}
