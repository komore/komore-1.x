import { type ListStepFunctionsExecutionsBaseParameters } from './list-step-functions-executions-base-parameters';

/**
 * List Step Functions Map Run executions parameters
 *
 * @see {@link https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListExecutions.html#API_ListExecutions_RequestParameters ListExecutions Request Parameters}
 */
export interface ListStepFunctionsMapRunExecutionsParameters extends ListStepFunctionsExecutionsBaseParameters {
  /**
   * Map Run ARN
   */
  readonly mapRunArn: StepFunctionsMapRunArn;
}
