import { type TypeSchemaType } from '@komore/typescript';

import { type CommandGroupDefinitions } from './group/command-group-definitions';
import { type GenericCommandGroup } from './group/generic-command-group';

/**
 * Command
 *
 * @template DomainType Domain name
 * @template CommandName Command name
 * @template CommandProperties Command properties type
 */
export interface Command<
  CommandGroupType extends GenericCommandGroup,
  CommandName extends keyof CommandGroupDefinitions<CommandGroupType>,
> {
  /**
   * Command group
   */
  readonly group: CommandGroupType;
  /**
   * Command name
   */
  readonly name: CommandName;
  /**
   * Command parameters
   */
  readonly parameters: TypeSchemaType<CommandGroupDefinitions<CommandGroupType>[CommandName]>;
}
