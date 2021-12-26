import { createLambdaEventTypeTest } from '../create-lambda-event-type-test';
import { type KinesisFirehoseEvent } from './kinesis-firehose-event';

/**
 * Tests whether an event is a Kinesis Firehose event
 * @param event Event
 * @returns true if the event is a Kinesis Firehose event
 */
export const isKinesisFirehoseEvent = createLambdaEventTypeTest<KinesisFirehoseEvent>(
  event =>
    (event.records && event.records[0].approximateArrivalTimestamp !== undefined) ||
    event.deliveryStreamArn?.startsWith('arn:aws:kinesis:')
);
