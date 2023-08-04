import { type Domain } from '@komore/domain';

import { type ErrorCategory } from './category/error-category';
import { type ErrorType } from './error-type';

/**
 * Generic error type
 */
export type GenericErrorType = ErrorType<ErrorCategory<Domain<string>, string>, string>;
