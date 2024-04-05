import { type AwsApiClientUrlStrategyParameters } from './aws-api-client-url-strategy-parameters';

/**
 * AWS API client URL strategy
 */
export interface AwsApiClientUrlStrategy {
  (parameters: AwsApiClientUrlStrategyParameters): URL;
}
