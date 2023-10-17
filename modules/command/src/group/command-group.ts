import { type GenericDomain } from '@komore/domain';
import { type ReadonlyRecord, type TypeSchemaType } from '@komore/typescript';

import { type Command } from '../command';
import { type CommandPropertiesSchema } from '../properties/command-properties-schema';

/**
 * Command group
 *
 * @template DomainType Domain type
 */
export interface CommandGroup<
  DomainType extends GenericDomain,
  Definitions extends ReadonlyRecord<string, CommandPropertiesSchema<ReadonlyRecord<string, unknown>>>,
> {
  /**
   * Definitions
   */
  readonly definitions: Definitions;
  /**
   * Domain
   */
  readonly domain: DomainType;
  /**
   * Creates a new command
   *
   * @param commandName Command name
   * @param commandParameters Command parameters
   * @returns Command
   * @template CommandName Command name
   */
  <CommandName extends keyof Definitions & string>(
    commandName: CommandName,
    commandParameters: TypeSchemaType<Definitions[CommandName]>
  ): Command<this, CommandName>;
}
