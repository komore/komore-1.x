import { type StepFunctionsApiClient } from '@komore/aws/step-functions';

/**
 * Step Functions query handler options
 */
export interface StepFunctionsQueryHandlerOptions {
  /**
   * Step Functions API client
   */
  readonly apiClient: StepFunctionsApiClient;
}
