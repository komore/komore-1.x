import { createErrorType, errorProperties } from '@komore/error';

import { notionDomain } from './notion.domain';

/**
 * Notion type error
 */
export const notionTypeError = createErrorType(notionDomain, {
  /**
   * Invalid database identifier
   */
  invalidDatabaseId: errorProperties<{
    /**
     * Database identifier
     */
    readonly databaseId: string;
  }>(),
  /**
   * Invalid page identifier
   */
  invalidPageId: errorProperties<{
    /**
     * Page identifier
     */
    readonly pageId: string;
  }>(),
});
