import { type SlackApiClient } from '../slack-api-client';
import { type PostSlackChatMessageParameters } from './post-slack-chat-message-parameters';
import { type PostSlackChatMessageResult } from './post-slack-chat-message-result';

/**
 * Creates a function that posts a Slack message
 *
 * @param apiClient Slack APi client
 * @returns Function that posts a Slack message
 * @see {@link https://api.slack.com/methods/chat.postMessage chat.postMessage}
 */
export function postSlackChatMessage(
  apiClient: SlackApiClient
): (parameters: PostSlackChatMessageParameters) => Observable<PostSlackChatMessageResult> {
  return parameters => apiClient<PostSlackChatMessageResult>('POST', 'chat.postMessage', parameters);
}
