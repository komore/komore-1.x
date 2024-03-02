import { asObservable } from '@komore/reactive';

import { type FunctionTrigger } from './function-trigger';
import { type FunctionTriggerOptions } from './function-trigger-options';

/**
 * Creates a function trigger
 *
 * @param triggerOptions Function trigger options
 * @returns Function trigger
 * @template InputType Input type
 * @template TriggerType Trigger type
 * @template OutputType Output type
 */
export function createFunctionTrigger<InputType, TriggerType, OutputType>(
  triggerOptions: FunctionTriggerOptions<InputType, TriggerType, OutputType>
): FunctionTrigger<InputType, TriggerType, OutputType> {
  const { processor, test } = triggerOptions;
  return {
    processor: trigger$ => asObservable(processor(trigger$)),
    test: input => asObservable(test(input)),
  };
}
