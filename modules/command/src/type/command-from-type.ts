import { type CommandFromCreator } from '../creator/command-from-creator';
import { type GenericCommandType } from './generic-command-type';

/**
 * Command from command type
 *
 * @template CommandType Command type
 */
export type CommandFromType<CommandType extends GenericCommandType> = CommandFromCreator<
  CommandType[keyof CommandType & string]
>;
