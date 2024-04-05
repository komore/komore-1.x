import { createContentTypeHttpHeader } from '@komore/http';

import { type AwsApiClientParametersStrategy } from '../aws-api-client-parameters-strategy';
import { type AwsApiClientFormParametersStrategyOptions } from './aws-api-client-form-parameters-strategy-options';

/**
 * Creates an AWS API client form parameters strategy
 *
 * This strategy:
 *
 * - Sends parameters as an URL-encoded form
 * - Adds any additional form parameters specified in the strategy options
 * - Adds the operation via the Action form parameters
 *
 * @param strategyOptions Form parameters strategy options
 * @returns AWS API client form parameters strategy
 */
export function awsApiClientFormParametersStrategy(
  strategyOptions: AwsApiClientFormParametersStrategyOptions
): AwsApiClientParametersStrategy {
  const { additionalParameters = {} } = strategyOptions;
  return ({ operation: Action, parameters }) => {
    if (parameters === undefined) {
      return {};
    }

    const body = new URLSearchParams({
      Action,
      ...additionalParameters,
      ...parameters,
    }).toString();

    return {
      body,
      headers: [createContentTypeHttpHeader('application/x-www-form-urlencoded')],
    };
  };
}
