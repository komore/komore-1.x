/**
 * Slack API response
 *
 * @see {@link https://api.slack.com/web#responses Evaluating responses}
 */
export type SlackApiResponse<T> = T & {
  /**
   * Encountered error
   */
  readonly error?: string;
  /**
   * Whether the operation succeeded
   */
  readonly ok: boolean;
  /**
   * Warning message
   */
  readonly warning?: string;
};
