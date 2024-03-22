import { type StepFunctionsApiClient } from '../step-functions-api-client';
import { type ListStepFunctionsExecutionsParameters } from './list-step-functions-executions-parameters';
import { type ListStepFunctionsExecutionsResult } from './list-step-functions-executions-result';

/**
 * Creates a function that lists Step Functions executions
 *
 * @param apiClient Step Functions API client
 * @returns Function that lists Step Functions executions
 * @see {@link https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListExecutions.html ListExecutions}
 */
export function listStepFunctionsExecutions(
  apiClient: StepFunctionsApiClient
): (parameters: ListStepFunctionsExecutionsParameters) => Observable<ListStepFunctionsExecutionsResult> {
  const operation = '';
  return parameters => apiClient({ operation, parameters });
}
