import { type GenericDomain } from '@komore/domain';
import { type ReadonlyRecord, type TypeSchemaType } from '@komore/typescript';

import { type ErrorInstance } from '../error-instance';
import { type ErrorPropertiesSchema } from '../properties/error-properties-schema';

/**
 * Error type
 *
 * @template DomainType Domain type
 * @template Definitions Definitions
 */
export interface ErrorType<
  DomainType extends GenericDomain,
  Definitions extends ReadonlyRecord<string, ErrorPropertiesSchema<ReadonlyRecord<string, unknown> | void>>,
> {
  /**
   * Definitions
   */
  readonly definitions: Definitions;
  /**
   * Domain
   */
  readonly domain: DomainType;
  /**
   * Creates a new error
   *
   * @param errorCode Error code
   * @param errorContext Error properties
   * @returns Error
   * @template ErrorCode Error code
   */
  <ErrorCode extends keyof Definitions & string>(
    errorCode: ErrorCode,
    errorContext: TypeSchemaType<Definitions[ErrorCode]>
  ): ErrorInstance<this, ErrorCode>;
  /**
   * Creates a new error
   *
   * @param errorCode Error code
   * @returns Error
   * @template ErrorCode Error code
   */
  <ErrorCode extends VoidDefinitionKeys<Definitions>>(errorCode: ErrorCode): ErrorInstance<this, ErrorCode>;
}

/**
 * Filters definitions that do not have properties
 *
 * @template Definitions Error properties definitions
 */
type VoidDefinitionKeys<
  Definitions extends ReadonlyRecord<string, ErrorPropertiesSchema<ReadonlyRecord<string, unknown> | void>>,
> = {
  [K in keyof Definitions]: TypeSchemaType<Definitions[K]> extends void ? K : never;
}[keyof Definitions];
