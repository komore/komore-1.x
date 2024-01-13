import { createClient } from '@komore/client';
import { mergeCompositeCommandType } from '@komore/command';
import { mergeCompositeEventType } from '@komore/event';
import { cache, deferValue } from '@komore/reactive';

import { createGitHubApiClient } from '../api/create-github-api-client';
import { gitHubCommand } from '../github.command';
import { gitHubError } from '../github.error';
import { gitHubEvent } from '../github.event';
import { gitHubQuery } from '../github.query';
import { createGitHubCommandHandler } from '../handler/create-github-command-handler';
import { createGitHubQueryHandler } from '../handler/create-github-query-handler';
import { type GitHubClient } from './github-client';
import { type GitHubClientOptions } from './github-client-options';
import { gitHubCommandEventMap } from './github-command-event-map';

/**
 * Creates a GitHub client
 *
 * @param clientOptions GitHub client options
 * @returns GitHub client
 */
export function createGitHubClient(clientOptions: GitHubClientOptions): GitHubClient {
  const { apiToken, endpointUrl = new URL('https://api.github.com/graphql/'), httpClient } = clientOptions;
  const apiClient$ = deferValue(() => createGitHubApiClient({ apiToken, endpointUrl, httpClient })).pipe(cache());
  return createClient({
    command: mergeCompositeCommandType(gitHubCommand),
    commandHandler: toEvents => createGitHubCommandHandler({ apiClient$, toEvents }),
    commandEventMap: gitHubCommandEventMap,
    error: gitHubError,
    event: mergeCompositeEventType(gitHubEvent),
    query: gitHubQuery,
    queryHandler: () => createGitHubQueryHandler({ apiClient$ }),
  });
}
