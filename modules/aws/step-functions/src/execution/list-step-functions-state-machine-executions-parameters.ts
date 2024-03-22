import { type StepFunctionsStateMachineArn } from '../state-machine/arn/step-functions-state-machine-arn';
import { type ListStepFunctionsExecutionsBaseParameters } from './list-step-functions-executions-base-parameters';

/**
 * List Step Functions state machine executions parameters
 *
 * @see {@link https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListExecutions.html#API_ListExecutions_RequestParameters ListExecutions Request Parameters}
 */
export interface ListStepFunctionsStateMachineRunExecutionsParameters
  extends ListStepFunctionsExecutionsBaseParameters {
  /**
   * State machine, state machine alias or state machine version ARN
   */
  readonly stateMachineArn:
    | StepFunctionsStateMachineArn
    | StepFunctionsStateMachineAliasArn
    | StepFunctionsStateMachineVersionArn;
}
