import { createClient } from '@komore/client';

import { createGitCommandHandler } from '../command/create-git-command-handler';
import { gitCommand } from '../git.command';
import { gitError } from '../git.error';
import { gitEvent } from '../git.event';
import { gitQuery } from '../git.query';
import { createGitQueryHandler } from '../query/create-git-query-handler';
import { type GitClient } from './git-client';
import { gitClientCommandEventMap } from './git-client-command-event-map';
import { type GitClientOptions } from './git-client-options';

/**
 * Creates a Git client
 *
 * @param clientOptions Git client options
 * @returns Git client
 */
export function createGitClient(clientOptions: GitClientOptions): GitClient {
  const { cliClient } = clientOptions;
  return createClient({
    command: gitCommand,
    commandEventMap: gitClientCommandEventMap,
    commandHandler: toEvents => createGitCommandHandler({ cliClient, toEvents }),
    error: gitError,
    event: gitEvent,
    query: gitQuery,
    queryHandler: () => createGitQueryHandler({ cliClient }),
  });
}
