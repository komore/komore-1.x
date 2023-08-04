import { Domain } from '@komore/domain';
import { ErrorCategory } from './error-category';
import { ReadonlyRecord } from '@komore/typescript';
import { ErrorPropertiesSchema } from '../properties/error-properties-schema';
import { ErrorDefinition } from '../definition/error-definition';

/**
 * Generic error category
 */
export type GenericErrorCategory = ErrorCategory<
  Domain<string>,
  string,
  ReadonlyRecord<string, ErrorDefinition<ErrorPropertiesSchema<ReadonlyRecord<string, unknown>>>>
>;
