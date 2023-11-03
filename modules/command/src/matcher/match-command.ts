import { type GenericCommand } from '../generic-command';
import { type CommandMatcher } from './command-matcher';

/**
 * Matches a command, branching based on the command type
 *
 * @param command Command
 * @param matcher Matcher
 * @returns Matcher result
 * @template CommandType Command type
 * @template Result Result type
 */
export function matchCommand<CommandType extends GenericCommand, Result>(
  command: CommandType,
  matcher: CommandMatcher<CommandType, Result>
): Result {
  type CommandName = CommandType['name'];
  const name = command.name as CommandName;
  const parameters = command.parameters as Parameters<(typeof matcher)[CommandName]>[0];
  const handler = matcher[name];
  return handler(parameters, command);
}
