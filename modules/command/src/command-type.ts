import { type Domain } from '@komore/domain';

import { type Command } from './command';

/**
 * Command type from a command
 *
 * @template T Command
 */
export type CommandType<T> = T extends Command<Domain<string>, infer Type, object | void> ? Type : never;
