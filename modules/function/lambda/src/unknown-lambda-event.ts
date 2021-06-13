import type {
  APIGatewayAuthorizerEvent,
  APIGatewayProxyEventV2,
  // APIGatewayRequestAuthorizerEvent,
  // APIGatewayTokenAuthorizerEvent,
  CloudFrontEvent,
  FirehoseTransformationEvent,
  KinesisStreamEvent
} from 'aws-lambda';
import type { ApiGatewayEvent } from './api-gateway/api-gateway-event';
import type { CognitoEvent } from './cognito/cognito-event';
import type { CognitoEventMap } from './cognito/cognito-event-map';
import type { DynamoDBEvent } from './dynamodb/dynamodb-event';
import type { S3Event } from './s3/s3-event';
import type { SesEvent } from './ses/ses-event';
import type { SnsEvent } from './sns/sns-event';
import type { SqsEvent } from './sqs/sqs-event';

/**
 * Unknown Lambda event
 */
export type UnknownLambdaEvent = Partial<APIGatewayAuthorizerEvent> &
  ApiGatewayEvent &
  APIGatewayProxyEventV2 &
  // APIGatewayRequestAuthorizerEvent &
  // APIGatewayTokenAuthorizerEvent &
  CloudFrontEvent &
  CognitoEvent<keyof CognitoEventMap> &
  DynamoDBEvent &
  KinesisStreamEvent &
  FirehoseTransformationEvent &
  S3Event &
  SesEvent &
  SnsEvent &
  SqsEvent;
