import type { FunctionTrigger } from '@komore/function';
import type { LambdaEvent } from './lambda-event';
import type { LambdaEventFunctionParameters } from './lambda-event-function-parameters';
import type { LambdaEventInputType } from './lambda-event-input-type';

/**
 * Lambda event function trigger
 * @template LambdaEventType Lambda event type
 * @template FunctionReturnType Function return type
 */
export type LambdaEventFunctionTrigger<LambdaEventType extends LambdaEvent, FunctionReturnType> = FunctionTrigger<
  LambdaEventFunctionParameters<LambdaEventType>,
  FunctionReturnType,
  LambdaEventInputType<LambdaEventType>
>;
