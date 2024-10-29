import { type Command } from '../command';
import { type CommandMatcherCase } from './command-matcher-case';

/**
 * Command matcher
 *
 * @template CommandType Possible command types
 * @template ResultType Result type
 */
export type CommandMatcher<CommandType extends Command, ResultType> = {
  [CommandName in CommandType['name']]: CommandMatcherCase<Extract<CommandType, { name: CommandName }>, ResultType>;
};
