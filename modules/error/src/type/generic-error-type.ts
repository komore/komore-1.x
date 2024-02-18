import { type Domain } from '@komore/domain';
import { type ReadonlyRecord } from '@komore/typescript';

import { type ErrorType } from './error-type';

/**
 * Generic error type
 */
export type GenericErrorType = ErrorType<Domain, ReadonlyRecord<string, any>>;
