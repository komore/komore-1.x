import { type stepFunctionsExecutionStatuses } from './step-functions-execution-statuses';

/**
 * Step Functions execution status
 */
export type StepFunctionsExecutionStatus = (typeof stepFunctionsExecutionStatuses)[number];
