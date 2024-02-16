import { type NotionDatabaseId } from './notion-database-id';

/**
 * Tests whether a string is a valid Notion database identifier
 *
 * @param value String
 * @returns true if the string is a valid Notion database identifier
 */
export function isNotionDatabaseId(value: string): value is NotionDatabaseId {
  return value.length > 0;
}
