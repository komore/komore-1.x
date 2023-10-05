import { type GenericDomain } from '@komore/domain';
import { type ReadonlyRecord } from '@komore/typescript';

import { type ErrorType } from '../error-type';
import { type ErrorPropertiesSchema } from '../properties/error-properties-schema';

/**
 * Error group
 *
 * @template DomainType Domain type
 * @template Definitions Definitions
 */
export interface ErrorGroup<
  DomainType extends GenericDomain,
  Definitions extends ReadonlyRecord<string, ErrorPropertiesSchema<ReadonlyRecord<string, unknown>>>,
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
   * @param errorContext Error context
   * @returns Error
   */
  <ErrorCode extends keyof Definitions>(
    errorCode: ErrorCode,
    errorContext: Definitions[ErrorCode]
  ): ErrorType<this, ErrorCode>;
}
