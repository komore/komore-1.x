import { type Command as GenericCommand } from './command';
import { type CommandType as GenericCommandType } from './type/command-type';

/**
 * Command name
 *
 * @template CommandType Command type
 */
export type CommandName<CommandType extends GenericCommandType | GenericCommand> =
  CommandType extends GenericCommandType ? keyof CommandType : CommandType['name'];
