import { createFunctionTrigger } from '@komore/function';

import { type LambdaTrigger } from './lambda-trigger';
import { type LambdaTriggerOptions } from './lambda-trigger-options';

/**
 * Creates a Lambda trigger
 *
 * @returns Lambda trigger
 * @template EventType Event type
 * @template ResultType Result type
 */
export function createLambdaTrigger<EventType, ResultType>(
  triggerOptions: LambdaTriggerOptions<EventType, ResultType>
): LambdaTrigger<EventType, ResultType> {
  const { processor, test } = triggerOptions;
  return createFunctionTrigger({
    processor: () => void 0,
    test,
  });
}
