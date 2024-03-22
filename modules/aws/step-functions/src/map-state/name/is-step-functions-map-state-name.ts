import { type StepFunctionsMapStateName } from './step-functions-map-state-name';

/**
 * Tests whether a string a Step Functions map state name
 *
 * @param mapStateName Map state name string
 * @returns true if the string is a Step Functions map state name
 */
export function isStepFunctionsMapStateName(mapStateName: string): mapStateName is StepFunctionsMapStateName {
  return /^[a-zA-Z0-9_\.-]{1,80}$/.test(mapStateName);
}
