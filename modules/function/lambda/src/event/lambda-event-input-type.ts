import type { LambdaEvent } from './lambda-event';
import type { LambdaEventContext } from './context/lambda-event-context';

/**
 * Lambda event input type
 * @template LambdaEventType Lambda event type
 */
export interface LambdaEventInputType<LambdaEventType extends LambdaEvent> {
  readonly event: LambdaEventType;
  readonly context: LambdaEventContext;
}
