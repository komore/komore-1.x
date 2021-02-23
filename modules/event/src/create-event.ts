import type { Event } from './event';
import type { EventCreator } from './event-creator';
import type { EventPropertiesSchema } from './event-properties-schema';
import type { EventSchema } from './event-schema';

/**
 * Creates an event creator for an event type
 * @param type Event type
 * @returns Event creator
 * @template EventTypeName Event type name
 */
export function createEvent<EventTypeName extends string>(type: EventTypeName): EventCreator<EventTypeName>;

/**
 * Creates an event creator for an event type with properties
 * @param type Event type
 * @param schema Event schema
 * @returns Event creator
 * @template EventTypeName Event type
 * @template S Event schema type
 */
export function createEvent<EventTypeName extends string, EventProperties extends Record<string, unknown>>(
  type: EventTypeName,
  properties: EventPropertiesSchema<EventProperties>
): EventCreator<EventTypeName, EventProperties>;

/**
 * Creates an event creator
 * @param type Event type
 * @param schema Event schema
 * @returns Event creator
 * @template T Event type
 * @template S Event schema type
 */
export function createEvent<T extends string, S extends object | void>(
  type: T,
  _?: { _t: 'schema' }
): EventCreator<Event<T, S>> {
  const eventCreator = (properties?: any): Event<T, S> => ({
    type,
    ...(properties || {})
  });

  return Object.defineProperty(eventCreator, 'type', {
    value: type,
    writable: false
  });
}
