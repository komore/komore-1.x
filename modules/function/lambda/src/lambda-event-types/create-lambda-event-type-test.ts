import { LambdaEvent } from '../lambda-event';
import { UnknownLambdaEvent } from '../unknown-lambda-event';
import { LambdaEventTypeTest } from './lambda-event-type-test';

/**
 * Creates a Lambda event type test based on an event's records' event source
 * @param eventSource Event source
 * @returns Lambda event type test
 * @template LambdaEventType Lambda event type
 */
export function createLambdaEventTypeTest<LambdaEventType extends LambdaEvent>(
  eventSource: string
): LambdaEventTypeTest<LambdaEventType> {
  return function (lambdaEvent: LambdaEvent): lambdaEvent is LambdaEventType {
    const unknownEvent = lambdaEvent as UnknownLambdaEvent;
    if (unknownEvent.Records) {
      const firstRecord = unknownEvent.Records[0];
      const recordEventSource = firstRecord.eventSource ?? firstRecord.EventSource;
      return recordEventSource === eventSource;
    }

    return false;
  };
}
