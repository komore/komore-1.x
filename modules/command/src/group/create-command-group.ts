import { type GenericDomain } from '@komore/domain';
import { type ReadonlyRecord, type TypeSchemaType } from '@komore/typescript';

import { type Command } from '../command';
import { type CommandPropertiesSchema } from '../properties/command-properties-schema';
import { type CommandGroup } from './command-group';

/**
 * Creates a command group
 *
 * @param domain Domain
 * @param definitions Command definitions
 * @returns Command group
 * @template DomainType Domain type
 * @template Definitions Command definitions
 */
export function createCommandGroup<
  DomainType extends GenericDomain,
  Definitions extends ReadonlyRecord<string, CommandPropertiesSchema<ReadonlyRecord<string, unknown>>>,
>(domain: DomainType, definitions: Definitions): CommandGroup<DomainType, Definitions> {
  const commandGroup: Omit<CommandGroup<DomainType, Definitions>, 'definitions' | 'domain'> = <
    CommandName extends keyof Definitions & string,
  >(
    name: CommandName,
    parameters: TypeSchemaType<Definitions[CommandName]>
  ) =>
    ({
      group: commandGroup as CommandGroup<DomainType, Definitions>,
      name,
      parameters,
    }) satisfies Command<CommandGroup<DomainType, Definitions>, CommandName>;

  Object.defineProperties(commandGroup, {
    definitions: { enumerable: false, value: definitions, writable: false },
    domain: { enumerable: false, value: domain, writable: false },
  });

  return commandGroup as CommandGroup<DomainType, Definitions>;
}
