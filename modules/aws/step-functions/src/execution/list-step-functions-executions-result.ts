import { type ListStepFunctionsExecutionsNextToken } from './list-step-functions-executions-next-token';
import { type StepFunctionsExecutionListItem } from './step-functions-execution-list-item';

/**
 * List Step Functions executions result
 *
 * @see {@link https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListExecutions.html#API_ListExecutions_ResponseElements ListExecutions Response Elements}
 */
export interface ListStepFunctionsExecutionsResult {
  /**
   * List of executions
   */
  readonly executions: ReadonlyArray<StepFunctionsExecutionListItem>;
  /**
   * Next token
   */
  readonly nextToken?: ListStepFunctionsExecutionsNextToken;
}
