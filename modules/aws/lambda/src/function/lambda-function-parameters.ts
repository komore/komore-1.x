import { type LambdaEventContext } from './context/lambda-event-context';

/**
 * Lambda function parameters
 *
 * @template EventType Event type
 */
export type LambdaFunctionParameters<EventType> = readonly [event: EventType, context: LambdaEventContext];
