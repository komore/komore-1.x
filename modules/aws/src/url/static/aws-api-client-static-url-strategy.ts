import { type AwsApiClientUrlStrategy } from '../aws-api-client-url-strategy';
import { type AwsApiClientStaticUrlStrategyOptions } from './aws-api-client-static-url-strategy-options';

/**
 * Creates a static AWS API client URL strategy
 *
 * @param strategyOptions Static URL strategy options
 * @returns Static AWS API client URL strategy
 */
export function awsApiClientStaticUrlStrategy(
  strategyOptions: AwsApiClientStaticUrlStrategyOptions
): AwsApiClientUrlStrategy {
  const { url } = strategyOptions;
  return ({ resourcePath }) => new URL(resourcePath, url);
}
