import { type EventFromCreator } from '../creator/event-from-creator';
import { type GenericEventType } from './generic-event-type';

/**
 * Event from event type
 *
 * @template EventType Event type
 */
export type EventFromType<EventType extends GenericEventType> = EventFromCreator<EventType[keyof EventType & string]>;
