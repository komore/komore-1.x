import { createErrorType } from '@komore/error';
import { notionDomain } from '@komore/notion';

/**
 * Notion error
 */
export const notionError = createErrorType(notionDomain, {});
