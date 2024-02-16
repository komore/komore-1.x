import { notionTypeError } from '../../notion-type.error';
import { isNotionDatabaseId } from './is-notion-database-id';
import { NotionDatabaseId } from './notion-database-id';

/**
 * Validates that a string is a Notion database identifier
 *
 * @param value String
 */
export function validateNotionDatabaseId(value: string): asserts value is NotionDatabaseId {
  if (!isNotionDatabaseId(value)) {
    throw notionTypeError.invalidDatabaseId({ databaseId: value });
  }
}
