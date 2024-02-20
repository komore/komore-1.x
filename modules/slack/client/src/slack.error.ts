import { createErrorType } from '@komore/error';
import { slackDomain } from '@komore/slack';

/**
 * Slack error
 */
export const slackError = createErrorType(slackDomain, {});
