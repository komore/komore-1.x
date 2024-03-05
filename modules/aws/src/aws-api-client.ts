import { type AwsApiClientParameters } from './aws-api-client-parameters';

/**
 * AWS API client
 */
export interface AwsApiClient {
  <T>(parmeters: AwsApiClientParameters): Observable<T>;
}
