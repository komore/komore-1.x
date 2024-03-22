import { type StepFunctionsStateMachineName } from './step-functions-state-machine-name';

/**
 * Tests whether a string a Step Functions state machine name
 *
 * @param stateMachineName State machine name string
 * @returns true if the string is a Step Functions state machine name
 */
export function isStepFunctionsStateMachineName(
  stateMachineName: string
): stateMachineName is StepFunctionsStateMachineName {
  return /^[a-zA-Z0-9_\.-]{1,80}$/.test(stateMachineName);
}
