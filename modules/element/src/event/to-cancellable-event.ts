import { type EventDispatcher } from './event-dispatcher';

/**
 * Creates a function that dispatches an event using an event dispatcher and returns whether the event was cancelled
 *
 * @param eventDispatcher Event dispatcher
 * @returns Function that dispatches an event using the event dispatcher and returns whether the event was cancelled
 * @template EventDetailType Event detail type
 */
export function toCancellableEvent<EventDetailType>(
  eventDispatcher: EventDispatcher<EventDetailType>
): (eventDetails: EventDetailType) => boolean {
  return eventDetails => !eventDispatcher(eventDetails);
}
