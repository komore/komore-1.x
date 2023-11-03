import { createCommandType, type CommandPropertiesSchema, type CommandType } from '@komore/command';
import { type GenericDomain } from '@komore/domain';
import { type ReadonlyRecord, type TypeSchemaType } from '@komore/typescript';

import { type FixedAwsType } from '../fixed-aws-type';

/**
 * Creates an AWS command type
 *
 * @param domain Domain
 * @param definitions Command definitions
 * @returns AWS command type
 * @template DomainType Domain type
 * @template Definitions Command definitions
 */
export function createAwsCommandType<
  DomainType extends GenericDomain,
  Definitions extends ReadonlyRecord<string, CommandPropertiesSchema<unknown>>,
>(domain: DomainType, definitions: Definitions): CommandType<DomainType, AwsCommandDefinitions<Definitions>> {
  return createCommandType(domain, definitions) as CommandType<DomainType, AwsCommandDefinitions<Definitions>>;
}

/**
 * Upgrades a set of command definitions' properties to fixed AWS types
 *
 * @template Definitions Command definitions
 */
type AwsCommandDefinitions<Definitions extends ReadonlyRecord<string, CommandPropertiesSchema<unknown>>> = {
  readonly [K in keyof Definitions]: TypeSchemaType<Definitions[K]> extends void
    ? Definitions[K]
    : CommandPropertiesSchema<FixedAwsType<TypeSchemaType<Definitions[K]>>>;
};
