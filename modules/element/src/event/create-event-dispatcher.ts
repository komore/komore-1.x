import { type EventDispatcher } from './event-dispatcher';

/**
 * Creates an event dispatcher
 *
 * @param eventTarget Event target
 * @param eventType Event type
 * @returns Event dispatcher
 */
export function createEventDispatcher(eventTarget: EventTarget, eventType: string): EventDispatcher<void>;

/**
 * Creates an event dispatcher
 *
 * @param eventTarget Event target
 * @param eventType Event type
 * @template EventDetailType Event detail type
 * @returns Event dispatcher
 */
export function createEventDispatcher<EventDetailType>(
  eventTarget: EventTarget,
  eventType: string
): EventDispatcher<EventDetailType>;

export function createEventDispatcher<EventDetailType>(
  eventTarget: EventTarget,
  eventType: string
): EventDispatcher<void> | EventDispatcher<EventDetailType> {
  const eventDispatcher = (detail?: EventDetailType) => {
    const customEvent = new CustomEvent(eventType, detail !== undefined ? { detail } : {});
    return eventTarget.dispatchEvent(customEvent);
  };

  return eventDispatcher;
}
