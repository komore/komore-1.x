import type { LambdaEventContext } from './context/lambda-event-context';

/**
 * Lambda event function parameters
 * @template EventType Event type
 */
export type LambdaEventFunctionParameters<EventType> = [event: EventType, context: LambdaEventContext];
