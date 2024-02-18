import { type Domain } from '@komore/domain';
import { createEventType, type EventPropertiesSchema, type EventType } from '@komore/event';
import { type ReadonlyRecord, type TypeSchemaType } from '@komore/typescript';

import { type FixedAwsType } from '../fixed-aws-type';

/**
 * Creates an AWS event type
 *
 * @param domain Domain
 * @param definitions Event definitions
 * @returns AWS event type
 * @template DomainType Domain type
 * @template Definitions Event definitions
 */
export function createAwsEventType<
  DomainType extends Domain,
  Definitions extends ReadonlyRecord<string, EventPropertiesSchema<unknown>>,
>(domain: DomainType, definitions: Definitions): EventType<DomainType, AwsEventDefinitions<Definitions>> {
  return createEventType(domain, definitions) as EventType<DomainType, AwsEventDefinitions<Definitions>>;
}

/**
 * Upgrades a set of event definitions' properties to fixed AWS types
 *
 * @template Definitions Event definitions
 */
type AwsEventDefinitions<Definitions extends ReadonlyRecord<string, EventPropertiesSchema<unknown>>> = {
  readonly [K in keyof Definitions & string]: TypeSchemaType<Definitions[K]> extends void
    ? Definitions[K]
    : EventPropertiesSchema<FixedAwsType<TypeSchemaType<Definitions[K]>>>;
};
