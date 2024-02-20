import { createCommandType } from '@komore/command';
import { slackDomain } from '@komore/slack';

/**
 * Slack command
 */
export const slackCommand = createCommandType(slackDomain, {});
