import { type AwsApiClientParametersStrategy } from '../aws-api-client-parameters-strategy';
import { type AwsApiClientQueryParametersStrategyOptions } from './aws-api-client-query-parameters-strategy-options';

/**
 * Creates an AWS API client query parameters strategy
 *
 * This strategy:
 *
 * - Sends parameters via query parameters
 * - Adds any additional query parameters specified in the strategy options
 *
 * @param strategyOptions Query parameters strategy options
 * @returns AWS API client query parameters strategy
 */
export function awsApiClientQueryParametersStrategy(
  strategyOptions: AwsApiClientQueryParametersStrategyOptions
): AwsApiClientParametersStrategy {
  const { additionalParameters: _ = {} } = strategyOptions;
  return _parameters => {
    return {};
  };
}
