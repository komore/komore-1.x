import { type StepFunctionsExecutionArn } from './arn/step-functions-execution-arn';

/**
 * Stop Step Functions execution parameters
 *
 * @see {@link https://docs.aws.amazon.com/step-functions/latest/apireference/API_StopExecution.html#API_StopExecution_RequestParameters StopExecution Request Parameters}
 */
export interface StopStepFunctionsExecutionParameters {
  /**
   * Detailed cause of the failure
   */
  readonly cause?: string;
  /**
   * Error code for the failure
   */
  readonly error?: string;
  /**
   * Execution ARN
   */
  readonly executionArn: StepFunctionsExecutionArn;
}
