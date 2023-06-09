import { WebClient } from '@slack/web-api';
import { type SlackClient } from './slack-client';
import { type SlackClientOptions } from './slack-client-options';

/**
 * Creates a Slack client
 * @param token Token
 * @param options Slack client options
 * @returns Slack client
 */
export function createSlackClient(token: string, options?: SlackClientOptions): SlackClient {
  return new WebClient(token, options);
}
