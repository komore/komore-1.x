import { type FunctionTrigger } from '@komore/function';
import { type SnsEvent } from './sns-event';
import { type SnsEventFunctionParameters } from './sns-event-function-parameters';
import { type SnsEventTriggerOptions } from './sns-event-trigger-options';

export function snsEventTrigger(
  options?: SnsEventTriggerOptions
): FunctionTrigger<SnsEventFunctionParameters, void, SnsEvent, void> {}
