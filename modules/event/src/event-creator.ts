import type { Event } from './event';

/**
 * Event with properties creator function type
 * @template EventTypeName Event type name
 * @template EventPropertiesSchema Event properties schema
 */
interface EventWithPropertiesCreatorFunctionType<
  EventTypeName extends string,
  EventPropertiesSchema extends Record<string, unknown>
> {
  (eventProperties: EventPropertiesSchema): Event<EventTypeName, EventPropertiesSchema>;
}

/**
 * Event without properties creator function type
 * @template EventTypeName Event type name
 */
interface EventWithoutPropertiesCreatorFunctionType<EventTypeName extends string> {
  (): Event<EventTypeName>;
}

/**
 * Event creator function type
 * @template EventTypeName Event type name
 * @template EventPropertiesSchema Event properties schema
 */
type EventCreatorFunctionType<
  EventTypeName extends string,
  EventPropertiesSchema extends Record<string, unknown> | undefined
> = EventPropertiesSchema extends Record<string, unknown>
  ? EventWithPropertiesCreatorFunctionType<EventTypeName, EventPropertiesSchema>
  : EventWithoutPropertiesCreatorFunctionType<EventTypeName>;

/**
 * Function capable of creating a event
 * @template EventTypeName Event type name
 * @template EventPropertiesSchema Event properties schema
 */
export type EventCreator<
  EventTypeName extends string,
  EventPropertiesSchema extends Record<string, unknown> | undefined = undefined
> = EventCreatorFunctionType<EventTypeName, EventPropertiesSchema> & Readonly<{
  type: `${EventTypeName}`;
}>;
