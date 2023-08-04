import { type Domain } from '@komore/domain';
import { type ReadonlyRecord } from '@komore/typescript';

import { type ErrorCategory } from './category/error-category';
import { type ErrorCategoryDefinitions } from './category/error-category-definitions';
import { type ErrorDefinition } from './definition/error-definition';
import { type ErrorDefinitionProperties } from './definition/error-definition-properties';
import { type ErrorPropertiesSchema } from './properties/error-properties-schema';

/**
 * Error type
 *
 * @template ErrorCategoryType Error category type
 * @template ErrorCode Error code
 */
export interface ErrorType<
  ErrorCategoryType extends ErrorCategory<
    Domain<string>,
    string,
    ReadonlyRecord<string, ErrorDefinition<ErrorPropertiesSchema<ReadonlyRecord<string, unknown>>>>
  >,
  ErrorCode extends keyof ErrorCategoryDefinitions<ErrorCategoryType>
> extends Error {
  /**
   * Error categorr
   */
  readonly category: ErrorCategoryType;
  /**
   * Error code
   */
  readonly code: ErrorCode;
  /**
   * Error context
   */
  readonly context: ErrorDefinitionProperties<ErrorCategoryDefinitions<ErrorCategoryType>[ErrorCode]>;
  /**
   * Error name
   */
  readonly name: 'KomoreError';
}
