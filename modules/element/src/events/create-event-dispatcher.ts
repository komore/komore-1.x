import type { EventDispatcher } from './event-dispatcher';

/**
 * Dispatches an event
 * @param target Event target
 * @param type Event type
 * @param detail Event detail
 * @returns true if the event's cancellable attribute is true or if the event's preventDefault method was called
 */
function dispatchEvent<EventTargetType extends EventTarget, EventDetailType = void>(
  target: EventTargetType,
  type: string,
  detail: EventDetailType
): boolean {
  const customEvent = new CustomEvent(type, { detail });
  return target.dispatchEvent(customEvent);
}

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
  const eventDispatcher: EventDispatcher<unknown> = eventDetail => dispatchEvent(eventTarget, eventType, eventDetail);
  return eventDispatcher as EventDispatcher<EventDetailType>;
}
