import { type FunctionTrigger } from '@komore/function';

import { type LambdaFunctionParameters } from '../lambda-function-parameters';

/**
 * Lambda trigger
 *
 * @template EventType Event type
 * @template ResultType Result type
 */
export type LambdaTrigger<EventType, ResultType> = FunctionTrigger<
  LambdaFunctionParameters<unknown>,
  EventType,
  ResultType
>;
