import { createClient } from '@komore/client';

import { createTeamsCommandHandler } from '../command/create-teams-command-handler';
import { createTeamsQueryHandler } from '../query/create-teams-query-handler';
import { teamsCommand } from '../teams.command';
import { teamsError } from '../teams.error';
import { teamsEvent } from '../teams.event';
import { teamsQuery } from '../teams.query';
import { type TeamsClient } from './teams-client';
import { teamsClientCommandEventMap } from './teams-client-command-event-map';
import { type TeamsClientOptions } from './teams-client-options';

/**
 * Creates a Teams client
 *
 * @param clientOptions Teams client options
 * @returns Teams client
 */
export function createTeamsClient(clientOptions: TeamsClientOptions): TeamsClient {
  const { apiClient } = clientOptions;

  return createClient({
    command: teamsCommand,
    commandEventMap: teamsClientCommandEventMap,
    commandHandler: toEvents => createTeamsCommandHandler({ apiClient, toEvents }),
    error: teamsError,
    event: teamsEvent,
    query: teamsQuery,
    queryHandler: () => createTeamsQueryHandler({ apiClient }),
  });
}
