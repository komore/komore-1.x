import { type S3Event } from './s3-event';
import { s3EventType } from './s3-event-type';

/**
 * Tests whether an event is an S3 event
 * @param event Event
 * @returns true if the event is an S3 event
 */
export function isS3Event(event: unknown): event is S3Event {
  const potentialS3Event = event as Partial<S3Event> | undefined;
  return potentialS3Event?.Records?.[0]?.eventSource === s3EventType;
}
