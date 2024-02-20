import { type SlackChannelId } from './slack-channel-id';
import { validateSlackChannelId } from './validate-slack-channel-id';

/**
 * Safely casts a string to a Slack channel identifier
 *
 * @param channelId Channel identifier
 * @returns Slack channel identifier
 */
export function asSlackChannelId(channelId: string): SlackChannelId {
  validateSlackChannelId(channelId);
  return channelId;
}
