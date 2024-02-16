import { type NotionPageId } from './notion-page-id';

/**
 * Tests whether a string is a valid Notion page identifier
 *
 * @param value String
 * @returns true if the string is a valid Notion page identifier
 */
export function isNotionPageId(value: string): value is NotionPageId {
  return value.length > 0;
}
