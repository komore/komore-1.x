import { createClient } from '@komore/client';

import { gitCommand } from '../git.command';
import { gitError } from '../git.error';
import { gitEvent } from '../git.event';
import { gitQuery } from '../git.query';
import { type GitClient } from './git-client';
import { type GitClientOptions } from './git-client-options';

/**
 * Creates a git client
 *
 * @param clientOptions git client options
 * @returns git client
 */
export function createGitClient(clientOptions: GitClientOptions): GitClient {
  const {} = clientOptions;
  return createClient({
    command: gitCommand,
    commandEventMap: gitCommandEventMap,
    commandHandler: events => createGitCommandHandler({ events }),
    error: gitError,
    event: gitEvent,
    query: gitQuery,
    queryHandler: () => createGitQueryHandler(),
  });
}
