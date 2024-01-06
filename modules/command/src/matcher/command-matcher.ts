import { type GenericCommand } from '../generic-command';
import { type CommandMatcherCase } from './command-matcher-case';

/**
 * Command matcher
 *
 * @template CommandType Possible command types
 * @template ResultType Result type
 */
export type CommandMatcher<CommandType extends GenericCommand, ResultType> = {
  [CommandName in CommandType['name']]: CommandMatcherCase<Extract<CommandType, { name: CommandName }>, ResultType>;
};
