import { type HttpClient } from '@komore/http/client';

/**
 * GitHub API client options
 */
export interface GitHubApiClientOptions {
  /**
   * Endpoint URL
   *
   * @note Defaults to `'https://api.github.com/graphql'`
   */
  readonly endpointUrl?: URL;
  /**
   * HTTP client
   */
  readonly httpClient: HttpClient;
  /**
   * Token
   */
  readonly token: string;
}
