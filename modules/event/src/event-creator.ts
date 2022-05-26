import { type ReadonlyRecord } from '@komore/typescript';
import { type Event } from './event';
import { type EventDomain } from './event-domain';

/**
 * Event with properties creator function type
 *
 * @template EventDomainType Event domain type
 * @template EventTypeName Event type name
 * @template EventPropertiesSchema Event properties schema
 */
interface EventWithPropertiesCreatorFunctionType<
  EventDomainType extends EventDomain<string>,
  EventTypeName extends string,
  EventPropertiesSchema extends ReadonlyRecord<string, unknown>
> {
  (eventProperties: EventPropertiesSchema): Event<EventDomainType, EventTypeName, EventPropertiesSchema>;
}

/**
 * Event without properties creator function type
 *
 * @template EventDomainType Event domain type
 * @template EventTypeName Event type name
 */
interface EventWithoutPropertiesCreatorFunctionType<
  EventDomainType extends EventDomain<string>,
  EventTypeName extends string
> {
  (): Event<EventDomainType, EventTypeName>;
}

/**
 * Event creator function type
 *
 * @template EventDomainType Event domain type
 * @template EventTypeName Event type name
 * @template EventPropertiesSchema Event properties schema
 */
type EventCreatorFunctionType<
  EventDomainType extends EventDomain<string>,
  EventTypeName extends string,
  EventPropertiesSchema extends ReadonlyRecord<string, unknown> | undefined
> = EventPropertiesSchema extends ReadonlyRecord<string, unknown>
  ? EventWithPropertiesCreatorFunctionType<EventDomainType, EventTypeName, EventPropertiesSchema>
  : EventWithoutPropertiesCreatorFunctionType<EventDomainType, EventTypeName>;

/**
 * Function capable of creating a event
 *
 * @template EventDomainType Event domain type
 * @template EventTypeName Event type name
 * @template EventPropertiesSchema Event properties schema
 */
export type EventCreator<
  EventDomainType extends EventDomain<string>,
  EventTypeName extends string,
  EventPropertiesSchema extends ReadonlyRecord<string, unknown> | undefined = undefined
> = EventCreatorFunctionType<EventDomainType, EventTypeName, EventPropertiesSchema> & {
  readonly type: EventTypeName;
};
