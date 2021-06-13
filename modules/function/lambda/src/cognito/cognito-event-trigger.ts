import type { FunctionTrigger } from '@komore/function';
import type { LambdaEvent } from '../lambda-event';
import { LambdaEventContext } from '../lambda-event-context';
import type { LambdaEventFunctionTrigger } from '../lambda-event-function-trigger';
import type { CognitoEvent } from './cognito-event';
import type { CognitoEventMap } from './cognito-event-map';
import type { CognitoEventTriggerOptions } from './cognito-event-trigger-options';

/**
 * API gateway trigger
 * @template TriggerSourceNames Trigger source names
 */
export function cognitoEventTrigger<TriggerSourceNames extends ReadonlyArray<keyof CognitoEventMap>>(
  options: CognitoEventTriggerOptions<TriggerSourceNames>
): LambdaEventFunctionTrigger<
    CognitoEvent<TriggerSourceNames[number]>,
    CognitoEvent<TriggerSourceNames[number]>> {
  return {
    buildInputs: buildApiGatewayTriggerInputs
  };
}

function buildInputs<TriggerSourceNames extends ReadonlyArray<keyof CognitoEventMap>>(
  parameters: LambdaEventFunctionParameters<CognitoEvent<TriggerSourceNames[number]>>,
  context: LambdaEventContext
): [supported: boolean, LambdaEventInputs<>] {
  return [true];
}
