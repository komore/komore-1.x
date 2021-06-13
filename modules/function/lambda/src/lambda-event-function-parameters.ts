import type { LambdaEventContext } from './lambda-event-context';

/**
 * Lambda event function parameters
 * @template EventType Event type
 */
export type LambdaEventFunctionParameters<EventType> = [event: EventType, context: LambdaEventContext];
