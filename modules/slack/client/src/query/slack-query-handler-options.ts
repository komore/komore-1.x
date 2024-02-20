import { type SlackApiClient } from '@komore/slack';

/**
 * Slack query handler options
 */
export interface SlackQueryHandlerOptions {
  /**
   * Slack API client
   */
  readonly apiClient: SlackApiClient;
}
