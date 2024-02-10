import { toEventCausedByCommand } from '@komore/client';
import { matchCommand } from '@komore/command';
import { type EventFromType } from '@komore/event';
import { fetchGitRefs, initializeGitRepository, pushGitRefs } from '@komore/git';
import { map, mapTo, redactValue, tapNext } from '@komore/reactive';

import { gitEvent } from '../git.event';
import { type GitCommandHandler } from './git-command-handler';
import { type GitCommandHandlerOptions } from './git-command-handler-options';

/**
 * Creates a Git command handler
 *
 * @param handlerOptions Git command handler options
 * @returns Git command handler
 */
export function createGitCommandHandler(handlerOptions: GitCommandHandlerOptions): GitCommandHandler {
  const { cliClient, toEvents } = handlerOptions;
  const fetch = fetchGitRefs(cliClient);
  const initialize = initializeGitRepository(cliClient);
  const push = pushGitRefs(cliClient);
  type GitEvent = EventFromType<typeof gitEvent>; // TODO: remove these casts when no longer necessary
  return command =>
    matchCommand(command, {
      fetch: options => fetch(options).pipe(mapTo(gitEvent.fetched() as GitEvent)),
      initialize: options => initialize(options).pipe(mapTo(gitEvent.initialized() as GitEvent)),
      push: options => push(options).pipe(mapTo(gitEvent.pushed() as GitEvent)),
    }).pipe(map(toEventCausedByCommand(command)), tapNext(toEvents), redactValue());
}
