import { type CommandName } from '../command-name';
import { type GenericCommand } from '../generic-command';
import { type CommandMatcher } from './command-matcher';
import { type CommandMatcherCase } from './command-matcher-case';

/**
 * Matches a command, branching based on the command type
 *
 * @param command Command
 * @param matcher Matcher
 * @returns Matcher result
 * @template CommandType Command type
 * @template ResultType Result type
 */
export function matchCommand<
  CommandType extends GenericCommand,
  CommandMatcherType extends CommandMatcher<CommandType, unknown>,
>(command: CommandType, matcher: CommandMatcherType): ReturnType<CommandMatcherType[keyof CommandMatcherType]> {
  const { name, parameters } = command;
  const handler = matcher[name as CommandName<CommandType>] as unknown as CommandMatcherCase<
    CommandType,
    ReturnType<CommandMatcherType[keyof CommandMatcherType]>
  >;
  return handler(parameters, command);
}
