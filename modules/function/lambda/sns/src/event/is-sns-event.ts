import { createLambdaEventSourceTypeTest } from '../create-lambda-event-source-type-test';
import type { SnsEvent } from './sns-event';

/**
 * Tests whether an event is an SNS event
 * @param event Event
 * @returns true if the event is an SNS event
 */
export const isSnsEvent = createLambdaEventSourceTypeTest<SnsEvent>('aws:sns');
