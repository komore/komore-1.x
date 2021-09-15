import type { Context } from 'aws-lambda';
import type { LambdaEvent } from './lambda-event';

/**
 * Lambda event type test
 * @template LambdaEventType Lambda event type
 */
export type LambdaEventTypeTest<LambdaEventType extends LambdaEvent> = (
  event: LambdaEvent,
  context: Context
) => event is LambdaEventType;
