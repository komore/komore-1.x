import { createErrorType } from '@komore/error';

import { slackDomain } from './slack.domain';

/**
 * Slack error
 */
export const slackError = createErrorType(slackDomain, {});
