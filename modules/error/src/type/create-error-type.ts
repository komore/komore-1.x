import { type GenericDomain } from '@komore/domain';
import { type ReadonlyRecord, type TypeSchemaType } from '@komore/typescript';

import { KomoreError } from '../komore-error';
import { type ErrorPropertiesSchema } from '../properties/error-properties-schema';
import { type ErrorType } from './error-type';

/**
 * Creates an error type
 *
 * An error type is used to define errors that belong that belong together.
 *
 * @param domain Domain
 * @param definitions Error definitions
 * @returns Error type
 * @template DomainType Domain type
 * @template Definitions Error definitions
 */
export function createErrorType<
  DomainType extends GenericDomain,
  Definitions extends ReadonlyRecord<string, ErrorPropertiesSchema<ReadonlyRecord<string, unknown> | void>>,
>(domain: DomainType, definitions: Definitions): ErrorType<DomainType, Definitions> {
  const errorType = <ErrorCode extends keyof Definitions & string>(
    errorCode: ErrorCode,
    errorContext: TypeSchemaType<Definitions[ErrorCode]>
  ) =>
    new KomoreError<ErrorType<DomainType, Definitions>, ErrorCode>(
      `${domain.name}.${errorCode}`,
      errorType as unknown as ErrorType<DomainType, Definitions>,
      errorCode,
      errorContext
    );

  Object.defineProperties(errorType, {
    definitions: { enumerable: false, value: definitions, writable: false },
    domain: { enumerable: false, value: domain, writable: false },
  });

  return errorType as ErrorType<DomainType, Definitions>;
}
