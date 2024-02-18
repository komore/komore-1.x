import { type Domain } from '@komore/domain';
import { type ReadonlyRecord } from '@komore/typescript';

import { type Command } from '../command';
import { type CommandCreator } from '../creator/command-creator';

/**
 * Command type
 *
 * @template DomainType Domain type
 * @template CommandParametersByCommandName Command parameters by command name
 */
export type CommandType<
  DomainType extends Domain,
  CommandParametersByCommandName extends ReadonlyRecord<string, any>,
> = {
  /**
   * Creates a new command
   *
   * @param parameters Command parameters
   * @returns Command
   */
  readonly [CommandName in keyof CommandParametersByCommandName & string]: CommandCreator<
    CommandName,
    CommandParametersByCommandName[CommandName] extends void
      ? () => Command<DomainType, CommandName, CommandParametersByCommandName[CommandName]>
      : (
          parameters: CommandParametersByCommandName[CommandName]
        ) => Command<DomainType, CommandName, CommandParametersByCommandName[CommandName]>
  >;
};
