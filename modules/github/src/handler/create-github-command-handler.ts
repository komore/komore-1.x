import { toEventCausedByCommand } from '@komore/client';
import { matchCommand } from '@komore/command';
import { cache, first, map, mapTo, mergeMap, tapNext } from '@komore/reactive';

import { type GitHubCommandHandler } from './github-command-handler';
import { type GitHubCommandHandlerOptions } from './github-command-handler-options';
import { closeGitHubPullRequest } from './pull-request/close-github-pull-request';
import { createGitHubPullRequest } from './pull-request/create-github-pull-request';
import { mergeGitHubPullRequest } from './pull-request/merge-github-pull-request';

/**
 * Creates a GitHub command handler
 *
 * @param handlerOptions GitHub command handler options
 * @returns GitHub command handler
 */
export function createGitHubCommandHandler(handlerOptions: GitHubCommandHandlerOptions): GitHubCommandHandler {
  const { apiClient$, toEvents } = handlerOptions;
  const matchers$ = apiClient$.pipe(
    map(
      apiClient =>
        ({
          closePullRequest: closeGitHubPullRequest(apiClient),
          createPullRequest: createGitHubPullRequest(apiClient),
          mergePullRequest: mergeGitHubPullRequest(apiClient),
        }) as const
    ),
    cache()
  );
  return command =>
    matchers$.pipe(
      first(),
      mergeMap(matchers => matchCommand(command, matchers)),
      map(toEventCausedByCommand(command)),
      tapNext(toEvents),
      mapTo(void 0)
    );
}
