import { createAuthorizationHttpHeader, type HttpHeader } from '@komore/http';

import { type NotionApiVersion } from './notion-api-version';

/**
 * Creates Notion API HTTP headers
 *
 * @param apiVersion API version
 * @param apiToken API token
 * @returns List of HTTP headers necessary for Notion API requests
 */
export function createNotionApiHttpHeaders(apiVersion: NotionApiVersion, apiToken?: string): ReadonlyArray<HttpHeader> {
  const apiVersionHeader = ['Notion-Version', apiVersion] as const;
  const authorizationHeader = apiToken !== undefined ? createAuthorizationHttpHeader('Bearer', apiToken) : undefined;
  return [apiVersionHeader, ...(authorizationHeader !== undefined ? [authorizationHeader] : [])];
}
