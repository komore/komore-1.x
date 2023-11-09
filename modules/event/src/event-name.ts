import { type GenericEvent } from './generic-event';
import { type GenericEventType } from './type/generic-event-type';

/**
 * Event name
 *
 * @template EventType Event type
 */
export type EventName<EventType extends GenericEventType | GenericEvent> = EventType extends GenericEventType
  ? keyof EventType
  : EventType['name'];
