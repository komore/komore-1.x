import { createLambdaEventSourceTypeTest } from "../create-lambda-event-source-type-test";
import type { KinesisEvent } from "./kinesis-event";

/**
 * Tests whether an event is a Kinesis event
 * @param event Event
 * @returns true if the event is a Kinesis event
 */
 export const isKinesisEvent = createLambdaEventSourceTypeTest<KinesisEvent>('aws:kinesis');
