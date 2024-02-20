import { slackTypeError } from '../../slack-type.error';
import { isSlackChannelId } from './is-slack-channel-id';
import { type SlackChannelId } from './slack-channel-id';

/**
 * Validates a Slack channel identifier
 *
 * @param channelId Slack channel identifier
 */
export function validateSlackChannelId(channelId: string): asserts channelId is SlackChannelId {
  if (!isSlackChannelId(channelId)) {
    throw slackTypeError.invalidSlackChannelId({ channelId });
  }
}
