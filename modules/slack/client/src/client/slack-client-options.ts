import { type SlackApiClient } from '@komore/slack';

/**
 * Slack client options
 */
export interface SlackClientOptions {
  /**
   * Slack API client
   */
  readonly apiClient: SlackApiClient;
}
