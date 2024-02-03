import { type TeamsApiClient } from './teams-api-client';
import { type TeamsApiClientOptions } from './teams-api-client-options';

/**
 * Creates a Teams API client
 *
 * @param clientOptions Teams API client options
 * @returns Teams API client
 */
export function createTeamsApiClient(clientOptions: TeamsApiClientOptions): TeamsApiClient {
  const { msGraphApiClient } = clientOptions;
  return <ResponseType>(method: 'GET' | 'PUT', resourcePath: string, payload?: unknown) =>
    payload !== undefined
      ? msGraphApiClient<ResponseType>(method as 'PATCH' | 'POST' | 'PUT', resourcePath, payload)
      : msGraphApiClient<ResponseType>(method as 'GET', resourcePath);
}
