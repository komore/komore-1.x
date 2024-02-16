import { type NotionApiClient } from '../notion-api-client';
import { type NotionDatabaseId } from './id/notion-database-id';
import { type NotionDatabase } from './notion-database';

/**
 * Creates a function that returns a Notion database
 *
 * @param apiClient Notion API client
 * @returns Function that returns a Notion database
 */
export function getNotionDatabase(
  apiClient: NotionApiClient
): (databaseId: NotionDatabaseId) => Observable<NotionDatabase> {
  return databaseId => {
    const resourcePath = `databases/${databaseId}`;
    return apiClient<NotionDatabase>('GET', resourcePath);
  };
}
