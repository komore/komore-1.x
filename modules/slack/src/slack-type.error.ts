import { createErrorType, errorProperties } from '@komore/error';

import { slackDomain } from './slack.domain';

/**
 * Slack type error
 */
export const slackTypeError = createErrorType(slackDomain, {
  /**
   * Invalid Slack channel identifier
   */
  invalidSlackChannelId: errorProperties<{
    /**
     * Channel identifier
     */
    readonly channelId: string;
  }>(),
});
