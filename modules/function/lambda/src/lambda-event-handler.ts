import { Context } from 'aws-lambda';

/**
 * Lambda event handler
 * @template E Event type
 * @template R Result type
 */
export type LambdaEventHandler<E, R> = (event: E, context: Context) => Promise<R | void>;

/**
 * Lambda event handler event type
 * @template EH Event handler type
 */
export type LambdaEventHandlerEventType<EH> = EH extends LambdaEventHandler<infer E, any> ? E : never;

/**
 * Lambda event handler result type
 * @template EH Event handler type
 */
export type LambdaEventHandlerResultType<EH> = EH extends LambdaEventHandler<any, infer R> ? R : never;
