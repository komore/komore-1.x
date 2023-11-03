import { type GenericCommand } from '../generic-command';
import { type CommandPropertiesType } from '../properties/command-properties-type';

/**
 * Command creator
 *
 * @template CommandType Command type
 * @private
 */
export type CommandCreator<CommandType extends GenericCommand> = {
  readonly type: CommandType;
} & CommandPropertiesType<CommandType> extends void
  ? () => CommandType
  : (parameters: CommandPropertiesType<CommandType>) => CommandType;
