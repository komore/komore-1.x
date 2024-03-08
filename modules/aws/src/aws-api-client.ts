import { type AwsApiClientParameters } from './aws-api-client-parameters';

/**
 * AWS API client
 */
export interface AwsApiClient {
  <T>(parameters: AwsApiClientParameters): Observable<T>;
}
