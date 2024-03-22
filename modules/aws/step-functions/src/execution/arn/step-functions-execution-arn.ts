import { type RegionalArn } from '@komore/aws';

import { type StepFunctionsStateMachineName } from '../../state-machine/name/step-functions-state-machine-name';
import { type StepFunctionsExecutionName } from '../name/step-functions-execution-name';

/**
 * Step Functions execution ARN
 */
export type StepFunctionsExecutionArn = RegionalArn<
  'states',
  `execution:${StepFunctionsStateMachineName}:${StepFunctionsExecutionName}`
>;
