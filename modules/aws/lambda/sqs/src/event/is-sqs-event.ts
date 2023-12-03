import { type SqsEvent } from './sqs-event';
import { sqsEventType } from './sqs-event-type';

/**
 * Tests whether an event is an SQS event
 * @param event Event
 * @returns true if the event is an SQS event
 */
export function isSqsEvent(event: unknown): event is SqsEvent {
  const potentialSqsEvent = event as Partial<SqsEvent> | undefined;
  return potentialSqsEvent?.Records?.[0]?.eventSource === sqsEventType;
}
