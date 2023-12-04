import { createCommandType } from '@komore/command';

import { notionDomain } from './notion.domain';

/**
 * Notion command
 */
export const notionCommand = createCommandType(notionDomain, {});
