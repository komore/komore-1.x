import { createLambdaEventSourceTypeTest } from '../create-lambda-event-source-type-test';
import type { S3Event } from './s3-event';

/**
 * Tests whether an event is an S3 event
 * @param event Event
 * @returns true if the event is an S3 event
 */
export const isS3Event = createLambdaEventSourceTypeTest<S3Event>('aws:s3');
