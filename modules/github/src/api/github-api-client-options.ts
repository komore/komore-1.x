import { type HttpClient } from '@komore/http/client';

/**
 * GitHub API client options
 */
export interface GitHubApiClientOptions {
  /**
   * API token
   */
  readonly apiToken: string;
  /**
   * Endpoint URL
   */
  readonly endpointUrl: URL;
  /**
   * HTTP client
   */
  readonly httpClient: HttpClient;
}
