import { WebClient } from '@slack/web-api';
import { type SlackClient } from './slack-client';
import { type SlackClientOptions } from './slack-client-options';

export function createSlackClient(token: string, options?: SlackClientOptions): SlackClient {
  return new WebClient(token, options);
}
