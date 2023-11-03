import { type GenericDomain } from '@komore/domain';
import { type TypeSchemaType } from '@komore/typescript';

import { type Event } from '../event';
import { type GenericEvent } from '../generic-event';

/**
 * Event properties type
 *
 * @template EventType Event type
 */
export type EventPropertiesType<EventType extends GenericEvent> = EventType extends Event<
  GenericDomain,
  string,
  infer SchemaType
>
  ? TypeSchemaType<SchemaType>
  : never;
