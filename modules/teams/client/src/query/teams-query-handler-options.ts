import { type TeamsApiClient } from '@komore/teams';

/**
 * Teams query handler options
 */
export interface TeamsQueryHandlerOptions {
  /**
   * Teams API client
   */
  readonly apiClient: TeamsApiClient;
}
