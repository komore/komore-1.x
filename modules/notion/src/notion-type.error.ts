import { createErrorType } from '@komore/error';

import { notionDomain } from './notion.domain';

/**
 * Notion type error
 */
export const notionTypeError = createErrorType(notionDomain, {});
