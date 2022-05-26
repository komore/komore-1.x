import { type ReadonlyRecord } from '@komore/typescript';
import { type EventDomain } from './event-domain';

/**
 * Event
 *
 * @template EventDomainType Event domain type
 * @template EventType Event type
 * @template EventProperties Event properties type
 */
export interface Event<
  EventDomainType extends EventDomain<string>,
  EventType extends string,
  EventProperties extends ReadonlyRecord<string, unknown> | undefined = undefined
> {
  readonly domain: EventDomainType;
  readonly type: EventType;
  readonly properties: EventProperties extends Record<string, unknown> ? EventProperties : never;
  readonly aggregateKey: string;
  readonly sequenceNumber: number;
}

/**
 * Event domain type
 *
 * @template EventType Event type
 */
export type EventDomainType<
  EventType extends Event<EventDomain<string>, string, ReadonlyRecord<string, unknown> | undefined>
> = EventType extends Event<infer DomainType, string, ReadonlyRecord<string, unknown> | undefined> ? DomainType : never;

/**
 * Event properties schema
 *
 * @template EventType Event type
 */
export type EventPropertiesSchemaType<
  EventType extends Event<EventDomain<string>, string, ReadonlyRecord<string, unknown> | undefined>
> = EventType extends Event<EventDomain<string>, string, infer EventPropertiesSchema> ? EventPropertiesSchema : never;
