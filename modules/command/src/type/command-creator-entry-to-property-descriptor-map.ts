import { type CommandCreatorEntry } from './command-creator-entry';

/**
 * Adds a command creator property descriptor to a property descriptor map and returns it
 *
 * @param propertyDescriptorMap Property descriptor map
 * @param commandCreatorEntry Command creator entry
 * @returns Property descriptor map
 * @private
 */
export function commandCreatorEntryToPropertyDescriptorMap(
  propertyDescriptorMap: PropertyDescriptorMap,
  commandCreatorEntry: CommandCreatorEntry
): PropertyDescriptorMap {
  const [commandName, commandCreator] = commandCreatorEntry;
  propertyDescriptorMap[commandName] = {
    enumerable: true,
    value: commandCreator,
    writable: false,
  };
  return propertyDescriptorMap;
}
