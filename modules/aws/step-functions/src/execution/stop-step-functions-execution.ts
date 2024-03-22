import { type StepFunctionsApiClient } from '../step-functions-api-client';
import { type StopStepFunctionsExecutionParameters } from './stop-step-functions-execution-parameters';
import { type StopStepFunctionsExecutionResult } from './stop-step-functions-execution-result';

/**
 * Creates a function that stops a Step Functions execution
 *
 * @param apiClient Step Functions API client
 * @returns Function that stops a Step Functions execution
 * @see {@link https://docs.aws.amazon.com/step-functions/latest/apireference/API_StopExecution.html StopExecution}
 */
export function stopStepFunctionsExecution(
  apiClient: StepFunctionsApiClient
): (parameters: StopStepFunctionsExecutionParameters) => Observable<StopStepFunctionsExecutionResult> {
  const operation = 'StopExecution';
  return parameters => apiClient({ operation, parameters });
}
