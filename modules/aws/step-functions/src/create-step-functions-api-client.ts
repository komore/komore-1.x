import { createAwsApiClient } from '@komore/aws';

import { type StepFunctionsApiClient } from './step-functions-api-client';
import { type StepFunctionsApiClientOptions } from './step-functions-api-client-options';

/**
 * Creates a Step Functions API client
 *
 * @param clientOptions Steps Functions API client options
 * @returns Step Functions API client
 */
export function createStepFunctionsApiClient(clientOptions: StepFunctionsApiClientOptions): StepFunctionsApiClient {
  const { ...awsClientOptions } = clientOptions;
  const service = 'step-functions';
  return createAwsApiClient({
    ...awsClientOptions,
    service,
    strategies: {
      parameters,
      result,
      signature,
      url,
    },
  });
}
