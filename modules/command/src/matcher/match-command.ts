import { type Domain } from '@komore/domain';

import { type Command } from '../command';
import { CommandMatcher } from './command-matcher';

/**
 * Matches a command, branching based on the command type
 *
 * @param command Command
 * @param matcher Matcher
 * @returns Matcher result
 */
export function matchCommand<T extends ReadonlyArray<Command<Domain<string>, string, any>>, Result>(
  command: T[number],
  matcher: CommandMatcher<T, Result>
): Result {
  const { commandType } = command;
  const handler = matcher[commandType];
  return handler(command);
}
