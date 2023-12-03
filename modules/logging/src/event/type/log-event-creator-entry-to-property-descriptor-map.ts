import { type LogEventCreatorEntry } from './log-event-creator-entry';

/**
 * Adds a log event creator property descriptor to a property descriptor map and returns it
 *
 * @param propertyDescriptorMap Property descriptor map
 * @param logEventCreatorEntry Log event creator entry
 * @returns Property descriptor map
 * @private
 */
export function logEventCreatorEntryToPropertyDescriptorMap(
  propertyDescriptorMap: PropertyDescriptorMap,
  logEventCreatorEntry: LogEventCreatorEntry
): PropertyDescriptorMap {
  const [eventName, eventCreator] = logEventCreatorEntry;
  propertyDescriptorMap[eventName] = {
    enumerable: false,
    value: eventCreator,
    writable: false,
  };
  return propertyDescriptorMap;
}
