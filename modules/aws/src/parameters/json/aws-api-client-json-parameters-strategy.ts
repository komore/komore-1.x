import { createAcceptHttpHeader, createContentTypeHttpHeader } from '@komore/http';
import { type AwsApiClientParametersStrategy } from '../aws-api-client-parameters-strategy';
import { type AwsApiClientJsonParametersStrategyOptions } from './aws-api-client-json-parameters-strategy-options';

/**
 * Creates an AWS API client JSON parameters strategy
 *
 * This strategy:
 *
 * - Sends parameters as a JSON body
 *
 * @param strategyOptions JSON parameters strategy options
 * @returns AWS API client JSON parameters strategy
 */
export function awsApiClientJsonParametersStrategy(
  strategyOptions: AwsApiClientJsonParametersStrategyOptions
): AwsApiClientParametersStrategy {
  return parameters => {
    return {
      headers: [createAcceptHttpHeader('application/json'), createContentTypeHttpHeader('application/x-amz-json-1.0')],
    };
  };
}
