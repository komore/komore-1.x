import { deferPromise, type Observable } from '@komore/reactive';
import { type ChatPostMessageArguments, type ChatPostMessageResponse } from '@slack/web-api';
import { type SlackClient } from './slack-client';

export function toMessageInChannel(
  slackClient: SlackClient,
  channel: string,
  options?: Omit<ChatPostMessageArguments, 'channel'>
): Observable<ChatPostMessageResponse> {
  return deferPromise(() =>
    slackClient.chat.postMessage({
      ...options,
      channel
    })
  );
}
