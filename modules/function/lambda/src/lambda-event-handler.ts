import { Context } from 'aws-lambda';

/**
 * Lambda event handler
 * @template EventType Event type
 * @template ResultType Result type
 */
export type LambdaEventHandler<EventType, ResultType> = (event: EventType, context: Context) => Promise<ResultType>;

/**
 * Lambda event handler event type
 * @template LambdaEventHandlerType Lambda event handler type
 */
export type LambdaEventHandlerEventType<LambdaEventHandlerType> = LambdaEventHandlerType extends LambdaEventHandler<
  infer EventType,
  any
>
  ? EventType
  : never;

/**
 * Lambda event handler result type
 * @template LambdaEventHandlerType Lambda event handler type
 */
export type LambdaEventHandlerResultType<LambdaEventHandlerType> = LambdaEventHandlerType extends LambdaEventHandler<
  any,
  infer ResultType
>
  ? ResultType
  : never;
