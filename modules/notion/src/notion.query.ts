import { createQueryType } from '@komore/query';

import { notionDomain } from './notion.domain';

/**
 * Notion query
 */
export const notionQuery = createQueryType(notionDomain, {});
