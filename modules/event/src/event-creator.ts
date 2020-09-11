import { Event, EventSchemaType, EventType } from './event';

/**
 * Event creator function type
 * @template E Event type
 */
export type EventCreatorFunctionType<E extends Event<any, any>> = EventSchemaType<E> extends object
  ? (eventProperties: EventSchemaType<E>) => E
  : () => E;

/**
 * Function capable of creating a specific event
 * @template E Event type
 */
export type EventCreator<E extends Event<any, any>> = EventCreatorFunctionType<E> &
  Readonly<{ type: EventType<E> }>;

export type EventCreatorEventType<EC> = EC extends EventCreator<infer E> ? E : never;
