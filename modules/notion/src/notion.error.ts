import { createErrorType } from '@komore/error';

import { notionDomain } from './notion.domain';

/**
 * Notion error
 */
export const notionError = createErrorType(notionDomain, {});
