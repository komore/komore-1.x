import { type Domain } from '@komore/domain';

import { type Command } from '../command';
import { type CommandType } from '../command-type';

/**
 * Command matcher
 *
 * @template T Possible command types
 * @template Result Result type
 */
export type CommandMatcher<Commands extends ReadonlyArray<Command<Domain<string>, string, any>>, Result> = {
  [C in CommandType<Commands[number]>]: (command: C) => Result;
};
