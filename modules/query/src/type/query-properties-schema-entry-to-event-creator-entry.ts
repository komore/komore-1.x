import { type Domain } from '@komore/domain';

import { type QueryPropertiesSchema } from '../properties/query-properties-schema';
import { type QueryCreatorEntry } from './query-creator-entry';

/**
 * Returns a query creator entry, given an entry with a query properties schema
 *
 * @param domain Domain
 * @returns Query creator entry
 * @template DomainType Domain type
 * @private
 */
export function queryPropertiesSchemaEntryToQueryCreatorEntry<DomainType extends Domain>(
  domain: DomainType
): (
  entry: readonly [name: string, schema: QueryPropertiesSchema<readonly [resultType: any, parametersType: any]>]
) => QueryCreatorEntry {
  return ([name]) => {
    const creator = (parameters: unknown) => ({
      domain,
      name,
      ...(parameters !== undefined ? { parameters } : {}),
    });
    return [name, creator];
  };
}
