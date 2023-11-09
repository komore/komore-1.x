import { type GenericDomain } from '@komore/domain';
import { type ReadonlyRecord } from '@komore/typescript';

import { type ErrorType } from './error-type';

/**
 * Generic error type
 */
export type GenericErrorType = ErrorType<GenericDomain, ReadonlyRecord<string, any>>;
