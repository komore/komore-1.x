import { type notionApiVersions } from './notion-api-versions';

/**
 * Notion API version
 */
export type NotionApiVersion = (typeof notionApiVersions)[number];
