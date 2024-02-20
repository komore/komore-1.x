import { createEventType } from '@komore/event';
import { slackDomain } from '@komore/slack';

/**
 * Slack event
 */
export const slackEvent = createEventType(slackDomain, {});
