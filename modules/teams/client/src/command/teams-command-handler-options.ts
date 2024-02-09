import { type CommandEventPairFromType } from '@komore/client';
import { type TeamsApiClient } from '@komore/teams';

import { type teamsCommand } from '../teams.command';
import { type teamsEvent } from '../teams.event';

/**
 * Teams command handler options
 */
export interface TeamsCommandHandlerOptions {
  /**
   * Teams API client
   */
  readonly apiClient: TeamsApiClient;
  /**
   * Teams events recorder
   */
  readonly toEvents: (pair: CommandEventPairFromType<typeof teamsCommand, typeof teamsEvent>) => void;
}
