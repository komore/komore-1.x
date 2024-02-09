import { type TeamsApiClient } from '@komore/teams';

/**
 * Teams client options
 */
export interface TeamsClientOptions {
  /**
   * Teams API client
   */
  readonly apiClient: TeamsApiClient;
}
