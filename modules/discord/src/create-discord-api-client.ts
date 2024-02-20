import { createAcceptHttpHeader, createAuthorizationHttpHeader, createContentTypeHttpHeader } from '@komore/http';
import { httpClientResponseToJson } from '@komore/http/client';
import { mergeMap } from '@komore/reactive';

import { type DiscordApiClient } from './discord-api-client';
import { type DiscordApiClientOptions } from './discord-api-client-options';

/**
 * Returns a Discord API client
 *
 * @param options Discord API client options
 * @returns Discord API client
 */
export function createDiscordApiClient(options: DiscordApiClientOptions): DiscordApiClient {
  const { endpointUrl = new URL('https://discord.com/api/'), apiToken, apiTokenType, apiVersion, httpClient } = options;
  const baseEndpointUrl = new URL(`v${apiVersion}/`, endpointUrl);
  const applicationJson = 'application/json';
  const readHeaders = [createAcceptHttpHeader(applicationJson), createAuthorizationHttpHeader(apiTokenType, apiToken)];
  const writeHeaders = [...readHeaders, createContentTypeHttpHeader(applicationJson)];

  return <ResponseType>(method: 'GET' | 'PATCH' | 'PUT' | 'POST', resourcePath: string, payload?: unknown) => {
    const url = new URL(resourcePath, baseEndpointUrl);
    const hasPayload = payload !== undefined;
    const headers = hasPayload ? writeHeaders : readHeaders;
    const body = hasPayload ? JSON.stringify(payload) : undefined;
    return httpClient({ headers, method, url, options: { ...(body !== undefined ? { body } : {}) } }).pipe(
      mergeMap(httpClientResponseToJson<ResponseType>())
    );
  };
}
