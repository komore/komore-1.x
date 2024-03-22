/**
 * Stop Step Functions execution result
 *
 * @see {@link https://docs.aws.amazon.com/step-functions/latest/apireference/API_StopExecution.html#API_StopExecution_ResponseElements StopExecution Response Elements}
 */
export interface StopStepFunctionsExecutionResult {
  /**
   * Timestamp the execution is stopped
   */
  readonly stopDate: number; // TODO: typed?
}
