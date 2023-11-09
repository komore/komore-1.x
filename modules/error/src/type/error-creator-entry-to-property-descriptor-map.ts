import { type ErrorCreatorEntry } from './error-creator-entry';

/**
 * Adds an error creator property descriptor to a property descriptor map and returns it
 *
 * @param propertyDescriptorMap Property descriptor map
 * @param errorCreatorEntry Error creator entry
 * @returns Property descriptor map
 * @private
 */
export function errorCreatorEntryToPropertyDescriptorMap(
  propertyDescriptorMap: PropertyDescriptorMap,
  errorCreatorEntry: ErrorCreatorEntry
): PropertyDescriptorMap {
  const [errorCode, errorCreator] = errorCreatorEntry;
  propertyDescriptorMap[errorCode] = {
    enumerable: false,
    value: errorCreator,
    writable: false,
  };
  return propertyDescriptorMap;
}
