import { type Domain } from '@komore/domain';
import { objectToEntries } from '@komore/functional';
import { type ReadonlyRecord } from '@komore/typescript';

import { type QueryPropertiesFromQueryDefinitions } from '../properties/query-properties-from-query-definitions';
import { type QueryPropertiesSchema } from '../properties/query-properties-schema';
import { queryCreatorEntryToPropertyDescriptorMap } from './query-creator-entry-to-property-descriptor-map';
import { queryPropertiesSchemaEntryToQueryCreatorEntry } from './query-properties-schema-entry-to-event-creator-entry';
import { type QueryType } from './query-type';

/**
 * Creates a query type
 *
 * @param domain Domain
 * @param definitions Query definitions
 * @returns Query type
 * @template DomainType Domain type
 * @template QueryDefinitions Query definitions
 */
export function createQueryType<
  DomainType extends Domain,
  QueryDefinitions extends ReadonlyRecord<
    string,
    QueryPropertiesSchema<readonly [resultType: any, parametersType: any]>
  >,
>(
  domain: DomainType,
  definitions: QueryDefinitions
): QueryType<DomainType, QueryPropertiesFromQueryDefinitions<QueryDefinitions>> {
  const propertyDescriptors = objectToEntries(definitions)
    .map(queryPropertiesSchemaEntryToQueryCreatorEntry(domain))
    .reduce(queryCreatorEntryToPropertyDescriptorMap, {} as PropertyDescriptorMap);
  return Object.defineProperties({}, propertyDescriptors) as QueryType<
    DomainType,
    QueryPropertiesFromQueryDefinitions<QueryDefinitions>
  >;
}
