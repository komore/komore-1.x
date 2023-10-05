import { type Domain } from '@komore/domain';
import { type ReadonlyRecord } from '@komore/typescript';

import { KomoreError } from '../komore-error';
import { type ErrorPropertiesSchema } from '../properties/error-properties-schema';
import { type ErrorGroup } from './error-group';

/**
 * Creates an error group
 *
 * An error group is used to define errors that belong that belong together, without necessarily having a scope as
 * large as a full domain.
 *
 * @param domain Domain
 * @param errorDefinitions Error definitions
 * @returns Error group
 * @template DomainType Domain type
 * @template Definitions Error definitions
 */
export function createErrorGroup<
  DomainType extends Domain<string>,
  Definitions extends ReadonlyRecord<string, ErrorPropertiesSchema<ReadonlyRecord<string, unknown>>>,
>(domain: DomainType, definitions: Definitions): ErrorGroup<DomainType, Definitions> {
  const errorGroup = <ErrorCode extends keyof Definitions & string>(
    errorCode: ErrorCode,
    errorContext: Definitions[ErrorCode]
  ) => {
    const definition = definitions[errorCode];
    if (definition === undefined) {
      throw new Error(`error code "${errorCode}" not defined in domain "${domain.name}" error group`);
    }
    const message = `${domain.name}.${errorCode}`;
    return new KomoreError<ErrorGroup<DomainType, Definitions>, ErrorCode>(
      message,
      errorGroup as unknown as ErrorGroup<DomainType, Definitions>,
      errorCode,
      errorContext
    );
  };

  Object.defineProperties(errorGroup, {
    definitions: { enumerable: false, value: definitions, writable: false },
    domain: { enumerable: false, value: domain, writable: false },
  });

  return errorGroup as ErrorGroup<DomainType, Definitions>;
}
