import { type EventFromCreator } from './creator/event-from-creator';
import { type GenericEvent } from './generic-event';
import { type GenericEventType } from './type/generic-event-type';
import { type EventFromType } from './type/event-from-type';

/**
 * Creates a function that tests whether an event is of a specific type
 *
 * @param eventType Event
 * @returns Function that tests whether an event is of a specific type
 * @template EventType Event type
 */
export function isEventOfType<EventType extends GenericEventType>(
  eventType: EventType
): (event: GenericEvent) => event is EventFromType<EventType>;

/**
 * Creates a function that tests whether an event is of a specific type and name
 *
 * @param eventType Event type
 * @param eventName Event name
 * @returns Function that tests whether an event is of a specific type and name
 * @template EventType Event type
 * @template EventName Event name
 */
export function isEventOfType<EventType extends GenericEventType, EventName extends keyof EventType>(
  eventType: EventType,
  eventName: EventName
): (event: GenericEvent) => event is EventFromCreator<EventType[EventName]>;

export function isEventOfType<EventType extends GenericEventType, EventName extends keyof EventType = keyof EventType>(
  eventType: EventType,
  eventName?: EventName
): (event: GenericEvent) => event is EventFromCreator<EventType[EventName]> {
  return (event): event is EventFromCreator<EventType[EventName]> =>
    event.type === eventType && (eventName === undefined || event.name === eventName);
}
