import { type GenericDomain } from '@komore/domain';
import { type ReadonlyRecord, type TypeSchemaType } from '@komore/typescript';

import { type Event } from '../event';
import { type EventPropertiesSchema } from '../properties/event-properties-schema';
import { type EventType } from './event-type';

/**
 * Creates a event type
 *
 * @param domain Domain
 * @param definitions Event definitions
 * @returns Event group
 * @template DomainType Domain type
 * @template Definitions Event definitions
 */
export function createEventType<
  DomainType extends GenericDomain,
  Definitions extends ReadonlyRecord<string, EventPropertiesSchema<unknown>>,
>(domain: DomainType, definitions: Definitions): EventType<DomainType, Definitions> {
  const eventType: Omit<EventType<DomainType, Definitions>, 'definitions' | 'domain'> = <
    EventName extends keyof Definitions & string,
  >(
    name: EventName,
    parameters: TypeSchemaType<Definitions[EventName]>
  ) =>
    ({
      type: eventType as EventType<DomainType, Definitions>,
      name,
      parameters,
    }) satisfies Event<EventType<DomainType, Definitions>, EventName>;

  Object.defineProperties(eventType, {
    definitions: { enumerable: false, value: definitions, writable: false },
    domain: { enumerable: false, value: domain, writable: false },
  });

  return eventType as EventType<DomainType, Definitions>;
}
