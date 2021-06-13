import { createLambdaEventSourceTypeTest } from '../create-lambda-event-source-type-test';
import { sqsEventType } from '../lambda';
import type { SqsEvent } from './sqs-event';

/**
 * Tests whether an event is an SQS event
 * @param event Event
 * @returns true if the event is an SQS event
 */
export const isSqsEvent = createLambdaEventSourceTypeTest<SqsEvent>(sqsEventType);
