import { type HashAlgorithm } from '@komore/cryptography';

import { type AwsApiClientParametersStrategy } from '../parameters/aws-api-client-parameters-strategy';

/**
 * AWS API client operation to HTTP client request options
 */
export interface AwsApiClientOperationToHttpClientRequestOptions {
  /**
   * Hash algorithm
   */
  readonly hashAlgorithm: HashAlgorithm;
  /**
   * Parameters strategy
   */
  readonly strategy: AwsApiClientParametersStrategy;
}
