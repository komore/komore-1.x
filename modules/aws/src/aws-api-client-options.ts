import { type HttpClient } from '@komore/http/client';
import { type NodeEnvironmentVariables } from '@komore/node/environment';

import { type AwsAccessKeyCredentials } from './credentials/aws-access-key-credentials';
import { type AwsRegion } from './region/aws-region';
import { type AwsApiClientStrategy } from './strategy/aws-api-client-strategy';

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
  readonly strategies: ReadonlyArray<AwsApiClientStrategy>;
  /**
   * URL
   */
  readonly url?: (region: AwsRegion) => URL;
}
