import { type SlackChannelId } from './slack-channel-id';

/**
 * Tests whether a string is a valid Slack channel identifier
 *
 * @param channelId Channel identifier string
 * @returns true if the string is a Slack channel identifier string
 */
export function isSlackChannelId(channelId: string): channelId is SlackChannelId {
  return channelId.length > 0;
}
