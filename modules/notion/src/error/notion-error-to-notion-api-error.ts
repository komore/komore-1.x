import { type ErrorFromType } from '@komore/error';

import { notionApiError } from '../notion-api.error';
import { type NotionError } from './notion-error';

/**
 * Returns a Notion API error, given a Notion error object
 *
 * @param notionError Notion error object
 * @returns Notion API error
 * @private
 */
export function notionErrorToNotionApiError(notionError: NotionError): ErrorFromType<typeof notionApiError> {
  const { code, message } = notionError;

  if (code === 'unauthorized' && message === 'API token is invalid.') {
    return notionApiError.invalidToken();
  }

  return notionApiError.unhandledError({ notionError });
}
