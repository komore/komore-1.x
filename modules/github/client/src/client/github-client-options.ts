import { type HttpClient } from '@komore/http/client';

/**
 * GitHub client options
 */
export interface GitHubClientOptions {
  /**
   * API token
   */
  readonly apiToken: string;
  /**
   * Endpoint URL
   *
   * @note Defaults to `https://api.github.com/graphql/`
   */
  readonly endpointUrl?: URL;
  /**
   * HTTP client
   */
  readonly httpClient: HttpClient;
}
