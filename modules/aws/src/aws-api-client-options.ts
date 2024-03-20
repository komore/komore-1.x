import { type HttpClient } from '@komore/http/client';
import { type NodeEnvironmentVariables } from '@komore/node/environment';

import { type AwsAccessKeyCredentials } from './credentials/aws-access-key-credentials';
import { type AwsRegion } from './region/aws-region';
import { type AwsApiClientParametersStrategy } from './strategy/parameters/aws-api-client-parameters-strategy';
import { type AwsApiClientResultStrategy } from './strategy/result/aws-api-client-result-strategy';
import { type AwsApiClientSignatureStrategy } from './strategy/signature/aws-api-client-signature-strategy';

/**
 * AWS API client options
 */
export interface AwsApiClientOptions {
  /**
   * Credentials
   *
   * @note Defaults to environment variables
   */
  readonly credentials?: AwsAccessKeyCredentials;
  /**
   * Environment variables
   */
  readonly environmentVariables: NodeEnvironmentVariables;
  /**
   * HTTP client
   */
  readonly httpClient: HttpClient;
  /**
   * Region
   *
   * @note Defaults to the AWS_REGION environment variable
   */
  readonly region?: AwsRegion;
  /**
   * Service
   */
  readonly service: string;
  /**
   * Strategies
   */
  readonly strategies: {
    /**
     * Parameters strategies
     */
    readonly parameters: ReadonlyArray<AwsApiClientParametersStrategy>;
    /**
     * Result strategies
     */
    readonly result: ReadonlyArray<AwsApiClientResultStrategy>;
    /**
     * Signature strategy
     */
    readonly signature: AwsApiClientSignatureStrategy;
  };
  /**
   * URL
   */
  readonly url?: (region: AwsRegion) => URL;
}
