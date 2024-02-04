import { createClient } from '@komore/client';

import { type GitLabClient } from './gitlab-client';
import { type GitLabClientOptions } from './gitlab-client-options';
import { gitLabCommand } from './gitlab.command';
import { gitLabError } from './gitlab.error';
import { gitLabEvent } from './gitlab.event';
import { gitLabQuery } from './gitlab.query';

/**
 * Creates a GitLab client
 *
 * @param clientOptions GitLab client options
 * @returns GitLab client
 */
export function createGitLabClient(clientOptions: GitLabClientOptions): GitLabClient {
  const { apiClient } = clientOptions;
  return createClient({
    command: gitLabCommand,
    commandEventMap: gitLabClientCommandEventMap,
    commandHandler: toEvents => createGitLabCommandHandler({ apiClient, toEvents }),
    error: gitLabError,
    event: gitLabEvent,
    query: gitLabQuery,
    queryHandler: () => createGitLabQueryHandler({ apiClient }),
  });
}
