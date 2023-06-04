import { type Domain } from '@komore/domain';

import { type CommandCreator } from './command-creator';
import { type CommandPropertiesSchema } from './command-properties-schema';

/**
 * Command group
 *
 * @template DomainType Domain type
 */
export interface CommandGroup<DomainType extends Domain<string>> {
  <CommandName extends string, CommandProperties>(
    commandName: CommandName,
    properties: CommandPropertiesSchema<CommandProperties>
  ): CommandCreator<DomainType>;
}
