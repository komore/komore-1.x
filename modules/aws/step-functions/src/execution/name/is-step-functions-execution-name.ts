import { type StepFunctionsExecutionName } from './step-functions-execution-name';

/**
 * Tests whether a string a Step Functions execution name
 *
 * @param executionName Execution name string
 * @returns true if the string is a Step Functions execution name
 */
export function isStepFunctionsExecutionName(executionName: string): executionName is StepFunctionsExecutionName {
  return /^[a-zA-Z0-9_\.-]{1,80}$/.test(executionName);
}
