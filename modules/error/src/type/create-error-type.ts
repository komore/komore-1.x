import { type GenericDomain } from '@komore/domain';
import { objectToEntries } from '@komore/functional';
import { type ReadonlyRecord } from '@komore/typescript';

import { type ErrorPropertiesFromErrorDefinitions } from '../properties/error-properties-from-error-definitions';
import { type ErrorPropertiesSchema } from '../properties/error-properties-schema';
import { errorCreatorEntryToPropertyDescriptorMap } from './error-creator-entry-to-property-descriptor-map';
import { errorPropertiesSchemaEntryToErrorCreatorEntry } from './error-properties-schema-entry-to-error-creator-entry';
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
 * @template ErrorDefinitions Error definitions
 */
export function createErrorType<
  DomainType extends GenericDomain,
  ErrorDefinitions extends ReadonlyRecord<string, ErrorPropertiesSchema<any>>,
>(
  domain: DomainType,
  definitions: ErrorDefinitions
): ErrorType<DomainType, ErrorPropertiesFromErrorDefinitions<ErrorDefinitions>> {
  const propertyDescriptors = objectToEntries(definitions)
    .map(errorPropertiesSchemaEntryToErrorCreatorEntry(domain))
    .reduce(errorCreatorEntryToPropertyDescriptorMap, {} as PropertyDescriptorMap);
  return Object.defineProperties({}, propertyDescriptors) as ErrorType<
    DomainType,
    ErrorPropertiesFromErrorDefinitions<ErrorDefinitions>
  >;
}
