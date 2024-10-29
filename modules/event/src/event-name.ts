import { type Event } from './event';
import { type EventType as GenericEventType } from './type/event-type';

/**
 * Event name
 *
 * @template EventType Event type
 */
export type EventName<EventType extends GenericEventType | Event> = EventType extends GenericEventType
  ? keyof EventType
  : EventType['name'];
