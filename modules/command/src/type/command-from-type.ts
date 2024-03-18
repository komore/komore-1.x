import { type CommandFromCreator } from '../creator/command-from-creator';
import { type CommandType as GenericCommandType } from './command-type';

/**
 * Command from command type
 *
 * @template CommandType Command type
 */
export type CommandFromType<
  CommandType extends GenericCommandType,
  K extends keyof CommandType & string = keyof CommandType & string,
> = CommandFromCreator<CommandType[K]>;
