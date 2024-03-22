import { type StepFunctionsStateMachineArn } from '../state-machine/arn/step-functions-state-machine-arn';
import { type StepFunctionsExecutionArn } from './arn/step-functions-execution-arn';
import { type StepFunctionsExecutionName } from './name/step-functions-execution-name';
import { type StepFunctionsExecutionStatus } from './status/step-functions-execution-status';

/**
 * Step Functions execution list item
 *
 * @see {@link https://docs.aws.amazon.com/step-functions/latest/apireference/API_ExecutionListItem.html ExecutionListItem}
 */
export interface StepFunctionsExecutionListItem {
  /**
   * Execution ARN
   */
  readonly executionArn: StepFunctionsExecutionArn;
  /**
   * Total number of items processed in a child workflow execution
   */
  readonly itemCount?: number;
  /**
   * Map Run ARN
   */
  readonly mapRunArn: StepFunctionsMapRunArn; // TODO
  /**
   * Execution name
   */
  readonly name: StepFunctionsExecutionName;
  /**
   * Start date
   */
  readonly startDate: number; // TODO: typed?
  /**
   * State machine ARN
   */
  readonly stateMachineArn: StepFunctionsStateMachineArn;
  /**
   * Current execution status
   */
  readonly status: StepFunctionsExecutionStatus;
  /**
   * Stop date
   */
  readonly stopDate?: number; // TODO: typed?
}
