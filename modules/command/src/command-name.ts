import { type GenericCommand } from './generic-command';
import { type GenericCommandType } from './type/generic-command-type';

/**
 * Command name
 *
 * @template CommandType Command type
 */
export type CommandName<CommandType extends GenericCommandType | GenericCommand> =
  CommandType extends GenericCommandType ? keyof CommandType : CommandType['name'];
