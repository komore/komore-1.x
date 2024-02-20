/**
 * Slack channel identifier
 */
export type SlackChannelId = string & {
  readonly __tag_slackChannelId: unique symbol;
};
