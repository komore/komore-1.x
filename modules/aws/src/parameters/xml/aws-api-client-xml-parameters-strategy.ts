import { type AwsApiClientParametersStrategy } from '../aws-api-client-parameters-strategy';
import { type AwsApiClientXmlParametersStrategyOptions } from './aws-api-client-xml-parameters-strategy-options';

/**
 * Creates an AWS API client XML parameters strategy
 *
 * @param strategyOptions XML parameters strategy options
 * @returns AWS API client XML parameters strategy
 */
export function awsApiClientXmlParametersStrategy(
  strategyOptions: AwsApiClientXmlParametersStrategyOptions
): AwsApiClientParametersStrategy {
  const { xmlParser: _ } = strategyOptions;
  return _parameters => {
    return {};
  };
}
