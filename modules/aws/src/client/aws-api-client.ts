import { type HttpClientResponse } from '@komore/http/client';

import { type AwsApiClientParametersWithHttpClientResponse } from './aws-api-client-parameters-with-http-client-response';
import { type AwsApiClientParametersWithProcessedResponse } from './aws-api-client-parameters-with-processed-response';

/**
 * AWS API client
 */
export interface AwsApiClient {
  <T>(parameters: AwsApiClientParametersWithProcessedResponse<T>): Observable<T>;
  (parameters: AwsApiClientParametersWithHttpClientResponse): Observable<HttpClientResponse>;
}
