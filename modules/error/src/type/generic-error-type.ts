import { type GenericDomain } from '@komore/domain';
import { type ReadonlyRecord } from '@komore/typescript';

import { type ErrorPropertiesSchema } from '../properties/error-properties-schema';
import { type ErrorType } from './error-type';

/**
 * Generic error type
 */
export type GenericErrorType = ErrorType<
  GenericDomain,
  ReadonlyRecord<string, ErrorPropertiesSchema<ReadonlyRecord<string, unknown> | void>>
>;
