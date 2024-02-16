import { type NotionPageId } from './notion-page-id';
import { validateNotionPageId } from './validate-notion-page-id';

/**
 * Safely casts a string to a Notion page identifier
 *
 * @param value String
 * @returns Notion page identifier
 */
export function asNotionPageId(value: string): NotionPageId {
  validateNotionPageId(value);
  return value;
}
