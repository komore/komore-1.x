import { type KinesisEvent } from './kinesis-event';
import { kinesisEventSource } from './kinesis-event-source';

/**
 * Tests whether an event is a Kinesis event
 *
 * @param event Event
 * @returns true if the event is a Kinesis event
 */
export const isKinesisEvent = createLambdaEventSourceTypeTest<KinesisEvent>(kinesisEventSource);
