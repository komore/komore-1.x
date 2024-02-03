import { type QueryFromType, type QueryHandler } from '@komore/query';

import { type notionQuery } from '../notion.query';

/**
 * Notion query handler
 */
export type NotionQueryHandler = QueryHandler<QueryFromType<typeof notionQuery>>;
