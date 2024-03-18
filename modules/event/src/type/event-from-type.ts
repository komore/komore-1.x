import { type EventFromCreator } from '../creator/event-from-creator';
import { type EventType as GenericEventType } from './event-type';

/**
 * Event from event type
 *
 * @template EventType Event type
 */
export type EventFromType<
  EventType extends GenericEventType,
  EventName extends keyof EventType & string = keyof EventType & string,
> = EventFromCreator<EventType[EventName]>;
