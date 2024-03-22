import { type ListStepFunctionsMapRunExecutionsParameters } from './list-step-functions-map-run-executions-parameters';
import { type ListStepFunctionsStateMachineRunExecutionsParameters } from './list-step-functions-state-machine-executions-parameters';

/**
 * List Step Functions executions parameters
 *
 * @see {@link https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListExecutions.html#API_ListExecutions_RequestParameters ListExecutions Request Parameters}
 */
export type ListStepFunctionsExecutionsParameters =
  | ListStepFunctionsMapRunExecutionsParameters
  | ListStepFunctionsStateMachineRunExecutionsParameters;
