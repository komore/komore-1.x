import { type HttpClientResponse } from '@komore/http/client';
import { type AwsApiClientParameters } from './aws-api-client-parameters';

/**
 * AWS API client
 */
export interface AwsApiClient {
  <T>(parameters: AwsApiClientParameters): Observable<T>;
  (parameters: AwsApiClientParameters & { readonly response: true }): Observable<HttpClientResponse>;
}
