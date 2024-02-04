import { createAuthorizationHttpHeader } from '@komore/http';
import { httpClientResponseToJson } from '@komore/http/client';
import { mergeMap, throwIf } from '@komore/reactive';

import { isNotionError } from './error/is-notion-error';
import { type NotionError } from './error/notion-error';
import { notionErrorToNotionApiError } from './error/notion-error-to-notion-api-error';
import { type NotionApiClient } from './notion-api-client';
import { type NotionApiClientOptions } from './notion-api-client-options';

/**
 * Creates a Notion API client
 *
 * @param clientOptions Notion API client options
 * @returns Notion API client
 */
export function createNotionApiClient(clientOptions: NotionApiClientOptions): NotionApiClient {
  const {
    endpointUrl = new URL('https://api.notion.com/v1/'),
    httpClient,
    token,
    version = '2022-06-28',
  } = clientOptions;
  const notionVersionHeader = ['Notion-Version', version] as const;
  const authorizationHeader = token !== undefined ? createAuthorizationHttpHeader('Bearer', token) : undefined;
  const headers = [notionVersionHeader, ...(authorizationHeader !== undefined ? [authorizationHeader] : [])];
  return <ResponseType>(
    method: 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT',
    resourcePath: string,
    payload?: unknown
  ) => {
    const url = new URL(resourcePath, endpointUrl);
    const hasPayload = payload !== undefined;
    const body = hasPayload ? JSON.stringify(payload) : undefined;
    return httpClient({ headers, method, url, options: { ...(body ? { body } : {}) } }).pipe(
      mergeMap(httpClientResponseToJson<ResponseType | NotionError>()),
      throwIf(isNotionError, notionErrorToNotionApiError)
    );
  };
}
