import { createErrorType } from '@komore/error';

import { slackDomain } from './slack.domain';

/**
 * Slack API error
 */
export const slackApiError = createErrorType(slackDomain, {});
