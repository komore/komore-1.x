import { createAcceptHttpHeader, createAuthorizationHttpHeader, createContentTypeHttpHeader } from '@komore/http';
import { httpClientResponseToJson } from '@komore/http/client';
import { mergeMap } from '@komore/reactive';

import { type SlackApiClient } from './slack-api-client';
import { type SlackApiClientOptions } from './slack-api-client-options';

/**
 * Creates a Slack API client
 *
 * @param clientOptions Slack API client options
 * @returns Slack API client
 */
export function createSlackApiClient(clientOptions: SlackApiClientOptions): SlackApiClient {
  const { endpointUrl = new URL('https://slack.com/api/'), httpClient, token } = clientOptions;
  const applicationJson = 'application/json';
  const readHeaders = [createAcceptHttpHeader(applicationJson), createAuthorizationHttpHeader('Bearer', token)];
  const writeHeaders = [...readHeaders, createContentTypeHttpHeader(applicationJson)];

  return <ResponseType>(method: 'GET' | 'PATCH' | 'PUT' | 'POST', resourcePath: string, payload?: unknown) => {
    const url = new URL(resourcePath, endpointUrl);
    const hasPayload = payload !== undefined;
    const headers = hasPayload ? writeHeaders : readHeaders;
    const body = hasPayload ? JSON.stringify(payload) : undefined;
    return httpClient({ headers, method, url, options: { ...(body !== undefined ? { body } : {}) } }).pipe(
      mergeMap(httpClientResponseToJson<ResponseType>())
    );
  };
}
