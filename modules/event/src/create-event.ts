import { type ReadonlyRecord } from '@komore/typescript';

import { type Event } from './event';
import { type EventCreator } from './event-creator';
import { type EventDomain } from './event-domain';
import { type EventPropertiesSchema } from './event-properties-schema';

/**
 * Creates an event creator for an event type
 *
 * @param eventDomain Event domain
 * @param eventType Event type
 * @returns Event creator
 * @template EventDomainType Event domain type
 * @template EventTypeName Event type name
 */
export function createEvent<EventDomainType extends EventDomain<string>, EventTypeName extends string>(
  eventDomain: EventDomainType,
  eventType: EventTypeName
): EventCreator<EventDomainType, EventTypeName>;

/**
 * Creates an event creator for an event type with properties
 *
 * @param eventDomain Event domain
 * @param eventType Event type
 * @param eventPropertiesSchema Event properties schema
 * @returns Event creator
 * @template EventTypeName Event type name
 * @template EventProperties Event schema type
 */
export function createEvent<
  EventDomainType extends EventDomain<string>,
  EventTypeName extends string,
  EventProperties extends ReadonlyRecord<string, unknown>,
>(
  eventDomain: EventDomainType,
  eventType: EventTypeName,
  eventPropertiesSchema: EventPropertiesSchema<EventProperties>
): EventCreator<EventDomainType, EventTypeName, EventProperties>;

/**
 * Creates an event creator
 *
 * @param eventDomain Event domain
 * @param eventType Event type
 * @param schema Event schema
 * @returns Event creator
 * @template EventDomainType Event domain type
 * @template EventTypeName Event type name
 * @template EventProperties Event schema type
 */
export function createEvent<
  EventDomainType extends EventDomain<string>,
  EventTypeName extends string,
  EventProperties extends ReadonlyRecord<string, unknown>,
>(
  eventDomain: EventDomainType,
  eventType: EventTypeName,
  _?: { _t: 'schema' }
): EventCreator<EventDomainType, EventTypeName> | EventCreator<EventDomainType, EventTypeName, EventProperties> {
  const eventCreator = (properties?: any): Event<EventDomainType, EventTypeName, EventProperties> => ({
    type: eventType,
    ...(properties ?? {}),
  });

  return Object.defineProperties(eventCreator, {
    domain: {
      value: eventDomain,
      writable: false,
    },
    type: {
      value: eventType,
      writable: false,
    },
  }) as EventCreator<EventDomainType, EventTypeName, EventProperties>;
}
