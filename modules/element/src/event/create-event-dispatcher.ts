import type { EventDispatcher } from './event-dispatcher';

/**
 * Creates an event dispatcher
 * @param eventTarget Event target
 * @param eventType Event type
 * @template EventTargetType Event target type
 * @template EventDetailType Event detail type
 * @returns Event dispatcher
 */
export function createEventDispatcher<EventDetailType = void, EventTargetType extends EventTarget = EventTarget>(
  eventTarget: EventTargetType,
  eventType: string
): EventDispatcher<EventDetailType> {
  const eventDispatcher = (detail: EventDetailType) => {
    const customEvent = new CustomEvent(eventType, { detail });
    return eventTarget.dispatchEvent(customEvent);
  };
  return eventDispatcher as EventDispatcher<EventDetailType>;
}
