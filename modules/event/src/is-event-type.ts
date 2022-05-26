import { type ReadonlyRecord } from '@komore/typescript';
import { type Event } from './event';
import { type EventCreator } from './event-creator';
import { type EventDomain } from './event-domain';

//type EventCreatorEventType<EC> = EC extends EventCreator<infer E> ? EventType<E> : never;

/**
 * Tests whether an event is of a specific type
 *
 * @param event Event
 * @param eventType Event type
 * @returns true if the event is of the specified event type
 * @template EC Event creator type
 */
export function isEventType<
  T extends ReadonlyArray<string>,
  EC extends ReadonlyArray<EventCreator<EventDomain<string>, T[number], ReadonlyRecord<string, unknown>>>,
  E extends ReadonlyArray<Event<EventDomain<string>, T[number], any>>
>(event: E[number], eventType: EC[number]): event is ReturnType<EC[number]> {
  return eventType.type === event.type;
}
