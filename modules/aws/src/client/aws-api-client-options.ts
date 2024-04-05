import { type HashAlgorithm } from '@komore/cryptography';
import { type HttpClient } from '@komore/http/client';

import { type AwsAccessKeyCredentials } from '../credentials/aws-access-key-credentials';
import { type AwsApiClientParametersStrategy } from '../parameters/aws-api-client-parameters-strategy';
import { type AwsRegion } from '../region/aws-region';
import { type AwsApiClientResultStrategy } from '../result/aws-api-client-result-strategy';
import { type AwsApiClientSignatureStrategy } from '../signature/aws-api-client-signature-strategy';
import { type AwsApiClientUrlStrategy } from '../url/aws-api-client-url-strategy';

/**
 * AWS API client options
 */
export interface AwsApiClientOptions {
  /**
   * Credentials
   */
  readonly credentials: AwsAccessKeyCredentials;
  /**
   * Hash algorithm
   *
   * @note Defaults to SHA-256
   */
  readonly hashAlgorithm?: HashAlgorithm;
  /**
   * HTTP client
   */
  readonly httpClient: HttpClient;
  /**
   * Region
   */
  readonly region: AwsRegion;
  /**
   * Service
   */
  readonly service: string;
  /**
   * Strategies
   */
  readonly strategies: {
    /**
     * Parameters strategy
     */
    readonly parameters: AwsApiClientParametersStrategy;
    /**
     * Result strategies, selected based on the response's media type
     */
    readonly result: ReadonlyArray<AwsApiClientResultStrategy>;
    /**
     * Signature strategy
     */
    readonly signature: AwsApiClientSignatureStrategy;
    /**
     * URL strategy
     */
    readonly url: AwsApiClientUrlStrategy;
  };
  /**
   * Current date and time provider
   *
   * @note Defaults to now
   */
  readonly currentDateTime?: () => Temporal.PlainDateTime;
}
