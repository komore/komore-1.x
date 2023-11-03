import { type GenericDomain } from '@komore/domain';
import { type ReadonlyRecord, type TypeSchemaType } from '@komore/typescript';

import { type EventPropertiesSchema } from './properties/event-properties-schema';
import { type EventType as EventDictionaryType } from './type/event-type';

/**
 * Event
 *
 * @template DomainType Domain type
 * @template EventType Event type
 * @template EventName Event name
 * @template SchemaType Event properties shema type
 */
export interface Event<
  DomainType extends GenericDomain,
  EventType extends EventDictionaryType<DomainType, ReadonlyRecord<string, EventPropertiesSchema<unknown>>>,
  EventName extends string,
  SchemaType extends EventPropertiesSchema<unknown>,
> {
  /**
   * Domain
   */
  readonly domain: DomainType;
  /**
   * Event name
   */
  readonly name: EventName;
  /**
   * Event parameters
   */
  readonly parameters: TypeSchemaType<SchemaType>;
  /**
   * Event type
   */
  readonly type: EventType;
}

/**
   * TODO
  readonly aggregateKey: string;
  readonly sequenceNumber: number;
   */
