import { type TypeCreator } from '@komore/typescript';

import { type EventFromCreator } from './creator/event-from-creator';
import { type GenericEvent } from './generic-event';
import { type GenericEventType } from './type/generic-event-type';
import { type EventFromType } from './type/event-from-type';
import { type EventCreator } from './creator/event-creator';

/**
 * Creates a function that tests whether an event is of a specific type
 *
 * @param eventType Event type
 * @returns Function that tests whether an event is of a specific type
 * @template EventType Event type
 */
export function isEventOfType<EventType extends GenericEventType>(
  eventType: EventType
): (event: GenericEvent) => event is EventFromType<EventType>;

export function isEventOfType<EventCreatorType extends EventCreator<string, TypeCreator<any, any>>>(
  eventType: EventCreatorType
): (event: GenericEvent) => event is ReturnType<EventCreatorType>;

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
  // TODO: proper test for domain/type
  return (event): event is EventFromCreator<EventType[EventName]> =>
    event.name in eventType && (eventName === undefined || event.name === eventName);
}
