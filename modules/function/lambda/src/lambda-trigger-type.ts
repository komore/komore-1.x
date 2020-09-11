import {
  APIGatewayProxyEvent,
  APIGatewayProxyEventV2,
  APIGatewayRequestAuthorizerEvent,
  APIGatewayTokenAuthorizerEvent,
  DynamoDBStreamEvent,
  FirehoseTransformationEvent,
  KinesisStreamEvent,
  S3Event,
  // TODO: SESEvent,
  SNSEvent,
  SQSEvent
} from 'aws-lambda';
import { LambdaEvent } from './lambda-event';
import { LambdaHandlerTypes } from './lambda-event-handlers';
import { UnknownLambdaEvent } from './unknown-lambda-event';

/**
 * Lambda trigger type
 */
export type LambdaTriggerType = keyof LambdaHandlerTypes;

/**
 * Lambda event type test
 */
type LambdaEventTypeTest<T extends LambdaEvent> = (event: LambdaEvent) => event is T;

/**
 * Builds an event type test
 * @param test Test
 * @returns Event type test
 */
function eventTypeTest<T extends LambdaEvent>(test: (ev: UnknownLambdaEvent) => boolean): LambdaEventTypeTest<T> {
  return function (event: LambdaEvent): event is T {
    const anyEvent = event as UnknownLambdaEvent;
    return test(anyEvent);
  };
}

/**
 * Builds an event type test based on an event's records' event source
 * @param eventSource Event source
 * @returns Event type test
 */
function eventSourceTypeTest<T extends LambdaEvent>(eventSource: string): LambdaEventTypeTest<T> {
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

/**
 * Test whether an event is an API Gateway HTTP API event
 */
export const isAPIGatewayHTTPApiEvent = eventTypeTest<APIGatewayProxyEventV2>(
  event => event.type === undefined && event.rawQueryString !== undefined
);

/**
 * Test whether an event is an API Gateway proxy event
 * @param event Event
 * @returns true if the event is an API Gateway proxy event
 */
export const isAPIGatewayProxyEvent = eventTypeTest<APIGatewayProxyEvent>(
  event => event.type === undefined && event.queryStringParameters !== undefined
);

/**
 * Tests whether an event is an API request authorizer event
 * @param event Event
 * @returns true if the event is an API Gateway request authorizer event
 */
export const isAPIGatewayRequestAuthorizerEvent = eventTypeTest<APIGatewayRequestAuthorizerEvent>(
  event => event.type === 'REQUEST'
);

/**
 * Tests whether an event is an API token authorizer event
 * @param event Event
 * @returns true if the event is an API Gateway token authorizer event
 */
export const isAPIGatewayTokenAuthorizerEvent = eventTypeTest<APIGatewayTokenAuthorizerEvent>(
  event => event.type === 'TOKEN' && event.authorizationToken === 'incoming-client-token'
);

/**
 * Test whether an event is a DynamoDB event
 * @param event Event
 * @returns true if the event is a DynamoDB event
 */
export const isDynamoDBEvent = eventSourceTypeTest<DynamoDBStreamEvent>('aws:dynamodb');

/**
 * Tests whether an event is a Kinesis event
 * @param event Event
 * @returns true if the event is a Kinesis event
 */
export const isKinesisEvent = eventSourceTypeTest<KinesisStreamEvent>('aws:kinesis');

/**
 * Tests whether an event is a Kinesis Firehose event
 * @param event Event
 * @returns true if the event is a Kinesis Firehose event
 */
export const isKinesisFirehoseEvent = eventTypeTest<FirehoseTransformationEvent>(
  event =>
    (event.records && event.records[0].approximateArrivalTimestamp !== undefined) ||
    event.deliveryStreamArn?.startsWith('arn:aws:kinesis:')
);

/**
 * Tests whether an event is an S3 event
 * @param event Event
 * @returns true if the event is an S3 event
 */
export const isS3Event = eventSourceTypeTest<S3Event>('aws:s3');

/**
 * Tests whether an event is an SES event
 * @param event Event
 * @returns true if the event is an SES event
 */
// TODO: export const isSESEvent = eventSourceTypeTest<SESEvent>('aws:ses');

/**
 * Tests whether an event is an SNS event
 * @param event Event
 * @returns true if the event is an SNS event
 */
export const isSNSEvent = eventSourceTypeTest<SNSEvent>('aws:sns');

/**
 * Tests whether an event is an SQS event
 * @param event Event
 * @returns true if the event is an SQS event
 */
export const isSQSEvent = eventSourceTypeTest<SQSEvent>('aws:sqs');
