import type {
  APIGatewayRequestAuthorizerEvent,
  APIGatewayTokenAuthorizerEvent,
  CloudFrontEvent
} from 'aws-lambda';
import type { ApiGatewayHttpApiEvent } from './api-gateway-http-api/api-gateway-http-api-event';
import type { ApiGatewayEvent } from './api-gateway/api-gateway-event';
import type { CognitoEvent } from './cognito/cognito-event';
import type { CognitoEventMap } from './cognito/cognito-event-map';
import type { DynamoDBEvent } from './dynamodb/dynamodb-event';
import type { KinesisFirehoseEvent } from './kinesis-firehose/kinesis-firehose-event';
import type { KinesisEvent } from './kinesis/kinesis-event';
import type { S3Event } from './s3/s3-event';
import type { SesEvent } from './ses/ses-event';
import type { SnsEvent } from './sns/sns-event';
import type { SqsEvent } from './sqs/sqs-event';

/**
 * Lambda event
 */
export type LambdaEvent =
  | ApiGatewayEvent
  | ApiGatewayHttpApiEvent
  | APIGatewayRequestAuthorizerEvent
  | APIGatewayTokenAuthorizerEvent
  | CloudFrontEvent
  | CognitoEvent<keyof CognitoEventMap>
  | DynamoDBEvent
  | KinesisEvent
  | KinesisFirehoseEvent
  | S3Event
  | SesEvent
  | SnsEvent
  | SqsEvent;
