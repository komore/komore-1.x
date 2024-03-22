import { type StepFunctionsApiClient } from '@komore/aws/step-functions';

/**
 * Step Functions client options
 */
export interface StepFunctionsClientOptions {
  /**
   * Step Functions API client
   */
  readonly apiClient: StepFunctionsApiClient;
}
