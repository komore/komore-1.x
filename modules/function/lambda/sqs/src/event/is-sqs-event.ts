import type { SqsEvent } from './sqs-event';
import { sqsEventType } from './sqs-event-type';

/**
 * Tests whether an event is an SQS event
 * @param event Event
 * @returns true if the event is an SQS event
 */
export function isSqsEvent(event: unknown): event is SqsEvent {
  const records = (event as Partial<SqsEvent>).Records;
  if (records !== undefined && records.length > 0) {
    const record = records[0];
    return record?.eventSource === sqsEventType;
  }

  return false;
}
