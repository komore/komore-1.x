import { type GenericEventType } from './type/generic-event-type';

/**
 * Event name
 *
 * @template EventType Event type
 */
export type EventName<EventType extends GenericEventType> = keyof EventType;
