import { type Observable } from '@komore/reactive';

/**
 * Discord API client
 */
export interface DiscordApiClient {
  /**
   * Returns the response from a Discord API GET request
   *
   * @param method HTTP method
   * @param resourcePath Resource path
   * @returns Response
   * @template ResponseType Response type
   */
  <ResponseType>(method: 'GET', resourcePath: string): Observable<ResponseType>;

  /**
   * Returns the response from a Discord API PATCH, POST or PUT request
   *
   * @param method HTTP method
   * @param resourcePath Resource path
   * @param payload Payload
   * @returns Response
   * @template ResponseType Response type
   */
  <ResponseType>(method: 'PATCH' | 'POST' | 'PUT', resourcePath: string, payload: unknown): Observable<ResponseType>;
}
