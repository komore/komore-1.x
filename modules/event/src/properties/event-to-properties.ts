import { type Event } from '../event';

/**
 * Returns an event's properties, given an event
 *
 * @param event Event
 * @returns Event properties
 * @template EventType Event type
 */
export function eventToProperties<EventType extends Event>(event: EventType): EventType['properties'] {
  return event.properties;
}
