import { type Domain } from '@komore/domain';

import { type Command } from '../command';
import { type GenericCommand } from '../generic-command';

/**
 * Command properties type from a command type
 *
 * @template CommandType Command type
 */
export type CommandPropertiesType<CommandType extends GenericCommand> = CommandType extends Command<
  Domain<string>,
  string,
  infer CommandProperties
>
  ? CommandProperties
  : never;
