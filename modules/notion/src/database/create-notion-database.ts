import { empty } from '@komore/reactive';

import { NotionDatabase } from './notion-database';
import { type NotionApiClient } from '../notion-api-client';

/**
 * Creates a function that creates a Notion database
 *
 * @param apiClient Notion API client
 * @returns Function that creates a Notion database
 */
export function createNotionDatabase(
  _apiClient: NotionApiClient
): (database: NotionDatabase) => Observable<NotionDatabase> {
  return _database => {
    return empty;
  };
}
