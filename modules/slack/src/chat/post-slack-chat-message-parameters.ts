import { type UrlString } from '@komore/url';

import { type SlackBlock } from '../block/slack-block';
import { type SlackKnownBlock } from '../block/slack-known-block';
import { type SlackChannelId } from '../channel/id/slack-channel-id';
import { type SlackMessageAttachment } from '../message/slack-message-attachment';
import { type SlackMessageMetadata } from '../message/slack-message-metadata';

/**
 * Post Slack message parameters
 *
 * @see {@link https://api.slack.com/methods/chat.postMessage chat.postMessage}
 */
export type PostSlackChatMessageParameters = {
  /**
   * Channel, private group or IM channel, as an identifier or a name
   */
  readonly channel: SlackChannelId | string;
  /**
   * Emoji to use as the icon for the message
   *
   * @note Overrides `icon_url`
   */
  readonly icon_emoji?: string;
  /**
   * URL to an image to use as the icon for the message
   */
  readonly icon_url?: UrlString;
  /**
   * Whether to find and link user groups
   */
  readonly link_names?: boolean;
  /**
   * Message metadata
   */
  readonly metadata: SlackMessageMetadata;
  /**
   * Whether Slack parses markup
   *
   * @note Defaults to `true`
   */
  readonly mrkdwn?: boolean;
  /**
   * Message parsing behavior
   *
   * @see {@link https://api.slack.com/methods/chat.postMessage#formatting Formatting}
   */
  readonly parse?: 'full' | 'none';
  /**
   * Whether the reply should be made visible to everyone in the channel or conversation
   */
  readonly reply_broadcast?: boolean;
  /**
   * Whether to make the message a reply to another message's `ts`
   *
   * @note When replying to a reply, the parent should be used rather than the reply
   */
  readonly thread_ts?: string; // TODO: typed?
  /**
   * Whether to enable unfurling of primarily text-based content
   */
  readonly unfurl_links?: boolean;
  /**
   * Whether to enable unfurling of media content
   *
   * @note Defaults to `true`
   */
  readonly unfurl_media?: boolean;
  /**
   * Bot user name
   */
  readonly username?: string;
} & (
  | {
      /**
       * List of structured attachments, as a JSON string
       */
      readonly attachments: ReadonlyArray<SlackMessageAttachment>;
    }
  | {
      /**
       * List of structured blocks, as a JSON string
       */
      readonly blocks: ReadonlyArray<SlackKnownBlock | SlackBlock>;
    }
  | {
      /**
       * Plain-text message
       */
      readonly text: string;
    }
);
