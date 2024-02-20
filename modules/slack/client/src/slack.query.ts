import { createQueryType } from '@komore/query';
import { slackDomain } from '@komore/slack';

/**
 * Slack query
 */
export const slackQuery = createQueryType(slackDomain, {});
