import { type Domain } from '@komore/domain';

import { type Command } from './command';

/**
 * Command name from a command type
 *
 * @template CommandType Command type
 */
export type CommandName<CommandType extends Command<Domain<string>, string, object | void>> =
  CommandType extends Command<Domain<string>, infer Type, object | void> ? Type : never;
