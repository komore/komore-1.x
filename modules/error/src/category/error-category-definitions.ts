import { type Domain } from '@komore/domain';

import { type ErrorCategory } from './error-category';
import { type GenericErrorCategory } from './generic-error-category';

/**
 * Error category definitions, given an error category
 *
 * @template ErrorCategoryType Error category type
 * @private
 */
export type ErrorCategoryDefinitions<ErrorCategoryType extends GenericErrorCategory> =
  ErrorCategoryType extends ErrorCategory<Domain<string>, string, infer Definitions> ? Definitions : never;
