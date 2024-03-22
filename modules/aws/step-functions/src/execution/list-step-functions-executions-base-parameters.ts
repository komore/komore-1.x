import { type ListStepFunctionsExecutionsNextToken } from './list-step-functions-executions-next-token';
import { type StepFunctionsExecutionStatus } from './status/step-functions-execution-status';

/**
 * List Step Functions executions base parameters
 *
 * @see {@link https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListExecutions.html#API_ListExecutions_RequestParameters ListExecutions Request Parameters}
 */
export interface ListStepFunctionsExecutionsBaseParameters {
  /**
   * Maximum number of results
   */
  readonly maxResults?: number;
  /**
   * Next token
   */
  readonly nextToken?: ListStepFunctionsExecutionsNextToken;
  /**
   * Redrive filter
   */
  readonly redriveFilter?: 'REDRIVEN' | 'NOT_REDRIVEN'; // TODO: separately typed + only for Map Run?
  /**
   * Status filter
   */
  readonly statusFilter?: StepFunctionsExecutionStatus;
}
