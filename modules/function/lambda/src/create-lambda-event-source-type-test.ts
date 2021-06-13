import type { LambdaEvent } from './lambda-event';
import type { LambdaEventTypeTest } from './lambda-event-type-test';
import type { UnknownLambdaEvent } from './unknown-lambda-event';

/**
 * Builds an event type test based on an event's records' event source
 * @param eventSource Event source
 * @returns Event type test
 */
export function createLambdaEventSourceTypeTest<T extends LambdaEvent>(eventSource: string): LambdaEventTypeTest<T> {
  return function (event: LambdaEvent): event is T {
    const unknownEvent = event as UnknownLambdaEvent;
    if (unknownEvent.Records) {
      const firstRecord = unknownEvent.Records[0];
      const recordEventSource = firstRecord.eventSource || firstRecord.EventSource;
      return recordEventSource === eventSource;
    }

    return false;
  };
}
