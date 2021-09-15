import type { ValueObserver } from '@komore/reactive';
import type { EventDispatcher } from './event-dispatcher';

/**
 * Creates a value observer that dispatches an event using an event dispatcher
 * @param eventDispatcher Event dispatcher
 * @returns Value observer that dispatches an event using the event dispatcher
 * @template EventDetailType Event detail type
 */
export function toEvent<EventDetailType>(
  eventDispatcher: EventDispatcher<EventDetailType>
): ValueObserver<EventDetailType> {
  return {
    next: eventDetails => eventDispatcher(eventDetails)
  };
}
