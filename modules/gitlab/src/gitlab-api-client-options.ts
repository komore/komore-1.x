import { type HttpClient } from '@komore/http/client';

/**
 * GitLab API client
 */
export interface GitLabApiClientOptions {
  /**
   * Endpoint URL
   *
   * @note Defaults to `'https://gitlab.com/api/graphql'`
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
