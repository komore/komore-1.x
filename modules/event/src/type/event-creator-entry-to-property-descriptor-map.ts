import { type EventCreatorEntry } from './event-creator-entry';

/**
 * Adds an event creator property descriptor to a property descriptor map and returns it
 *
 * @param propertyDescriptorMap Property descriptor map
 * @param eventCreatorEntry Event creator entry
 * @returns Property descriptor map
 * @private
 */
export function eventCreatorEntryToPropertyDescriptorMap(
  propertyDescriptorMap: PropertyDescriptorMap,
  eventCreatorEntry: EventCreatorEntry
): PropertyDescriptorMap {
  const [eventName, eventCreator] = eventCreatorEntry;
  return {
    ...propertyDescriptorMap,
    [eventName]: {
      enumerable: false,
      value: eventCreator,
      writable: false,
    },
  };
}
