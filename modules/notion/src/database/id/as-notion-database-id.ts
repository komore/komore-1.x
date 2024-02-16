import { type NotionDatabaseId } from './notion-database-id';
import { validateNotionDatabaseId } from './validate-notion-database-id';

/**
 * Safely casts a string to a Notion database identifier
 *
 * @param value String
 * @returns Notion database identifier
 */
export function asNotionDatabaseId(value: string): NotionDatabaseId {
  validateNotionDatabaseId(value);
  return value;
}
