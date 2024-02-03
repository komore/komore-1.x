import { type NotionError } from './notion-error';

/**
 * Tests whether a value is a Notion error
 *
 * @param value Value
 * @returns true if the value is a Notion error
 * @private
 */
export function isNotionError(value: unknown): value is NotionError {
  return typeof value === 'object' && value !== null && 'object' in value && value.object === 'error';
}
