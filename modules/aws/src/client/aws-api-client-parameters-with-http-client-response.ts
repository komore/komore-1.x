import { type AwsApiClientBaseParameters } from './aws-api-client-base-parameters';

/**
 * AWS API client parameters with HTTP client response
 */
export interface AwsApiClientParametersWithHttpClientResponse extends AwsApiClientBaseParameters {
  /**
   * Whether the client should return the HTTP client response rather than the processed response
   */
  readonly response: true;
}
