import { Event } from './event';
import { EventCreator } from './event-creator';
import { EventSchema } from './event-schema';

/**
 * Creates an event creator for an event type
 * @param type Event type
 * @returns Event creator
 * @template T Event type
 */
export function createEvent<T extends string>(type: T): EventCreator<Event<T, void>>;

/**
 * Creates an event creator for an event type with properties
 * @param type Event type
 * @param schema Event schema
 * @returns Event creator
 * @template T Event type
 * @template S Event schema type
 */
export function createEvent<T extends string, S extends object>(type: T, schema: EventSchema<S>): EventCreator<Event<T, S>>;

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
