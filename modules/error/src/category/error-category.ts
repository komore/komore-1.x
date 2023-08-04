import { type Domain } from '@komore/domain';
import { type ReadonlyRecord } from '@komore/typescript';

import { type ErrorDefinition } from '../definition/error-definition';
import { type ErrorType } from '../error-type';
import { type ErrorPropertiesSchema } from '../properties/error-properties-schema';
import { ErrorDefinitionProperties } from '../definition/error-definition-properties';

/**
 * Error category
 *
 * @template DomainType Domain type
 * @template CategoryName Category name
 * @template Definitions Definitions
 */
export interface ErrorCategory<
  DomainType extends Domain<string>,
  CategoryName extends string,
  Definitions extends ReadonlyRecord<string, ErrorDefinition<ErrorPropertiesSchema<ReadonlyRecord<string, unknown>>>>
> {
  /**
   * Creates a new error
   *
   * @param errorCode Error code
   * @param errorContext Error context
   * @returns Error
   */
  <ErrorCode extends keyof Definitions>(
    errorCode: ErrorCode,
    errorContext: ErrorDefinitionProperties<Definitions[ErrorCode]>
  ): ErrorType<ErrorCategory<DomainType, CategoryName, Definitions>, ErrorCode>;

  /**
   * Definitions
   */
  readonly definitions: Definitions;
  /**
   * Domain
   */
  readonly domain: DomainType;
  /**
   * Name
   */
  readonly name: CategoryName;
}
