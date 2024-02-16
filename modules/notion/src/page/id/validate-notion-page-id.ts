import { notionTypeError } from '../../notion-type.error';
import { isNotionPageId } from './is-notion-page-id';
import { NotionPageId } from './notion-page-id';

/**
 * Validates that a string is a Notion page identifier
 *
 * @param value String
 */
export function validateNotionPageId(value: string): asserts value is NotionPageId {
  if (!isNotionPageId(value)) {
    throw notionTypeError.invalidPageId({ pageId: value });
  }
}
