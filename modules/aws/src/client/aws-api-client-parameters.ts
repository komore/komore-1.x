import { type AwsApiClientParametersWithHttpClientResponse } from './aws-api-client-parameters-with-http-client-response';
import { type AwsApiClientParametersWithProcessedResponse } from './aws-api-client-parameters-with-processed-response';

/**
 * AWS API client parameters
 */
export type AwsApiClientParameters<T = unknown> =
  | AwsApiClientParametersWithHttpClientResponse
  | AwsApiClientParametersWithProcessedResponse<T>;
