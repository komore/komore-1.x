import { type RegionalArn } from '@komore/aws';

import { type StepFunctionsStateMachineName } from '../name/step-functions-state-machine-name';

/**
 * Step Functions state machine ARN
 */
export type StepFunctionsStateMachineArn = RegionalArn<'states', `stateMachine:${StepFunctionsStateMachineName}`>;
