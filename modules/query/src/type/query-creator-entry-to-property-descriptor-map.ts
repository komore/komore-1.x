import { type QueryCreatorEntry } from './query-creator-entry';

/**
 * Adds a query creator property descriptor to a property descriptor map and returns it
 *
 * @param propertyDescriptorMap Property descriptor map
 * @param queryCreatorEntry Query creator entry
 * @returns Property descriptor map
 * @private
 */
export function queryCreatorEntryToPropertyDescriptorMap(
  propertyDescriptorMap: PropertyDescriptorMap,
  queryCreatorEntry: QueryCreatorEntry
): PropertyDescriptorMap {
  const [queryName, queryCreator] = queryCreatorEntry;
  propertyDescriptorMap[queryName] = {
    enumerable: false,
    value: queryCreator,
    writable: false,
  };
  return propertyDescriptorMap;
}
