import { type MediaType } from '@komore/http';
import { type HttpClientResponse } from '@komore/http/client';

/**
 * AWS API client result strategy
 */
export interface AwsApiClientResultStrategy {
  /**
   * Returns a result, given an HTTP client response
   *
   * @param httpClientResponse HTTP client response
   * @param operation Operation name
   * @returns Result
   */
  readonly httpClientResponseToResult: <T>(httpClientResponse: HttpClientResponse, operation: string) => Observable<T>;
  /**
   * Media types the strategy applies to
   */
  readonly mediaTypes: ReadonlySet<MediaType>;
  /**
   * Strategy type
   */
  readonly type: 'result';
}
