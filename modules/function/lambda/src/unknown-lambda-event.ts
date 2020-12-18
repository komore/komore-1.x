import {
  APIGatewayAuthorizerEvent,
  APIGatewayProxyEvent,
  APIGatewayProxyEventV2,
  // APIGatewayRequestAuthorizerEvent,
  // APIGatewayTokenAuthorizerEvent,
  CloudFrontEvent,
  DynamoDBStreamEvent,
  FirehoseTransformationEvent,
  KinesisStreamEvent,
  S3Event,
  // TODO: SESEvent,
  SNSEvent,
  SQSEvent
} from 'aws-lambda';

/**
 * Unknown Lambda event
 */
export type UnknownLambdaEvent = Partial<APIGatewayAuthorizerEvent> &
  APIGatewayProxyEvent &
  APIGatewayProxyEventV2 &
  // APIGatewayRequestAuthorizerEvent &
  // APIGatewayTokenAuthorizerEvent &
  CloudFrontEvent &
  DynamoDBStreamEvent &
  KinesisStreamEvent &
  FirehoseTransformationEvent &
  S3Event &
  // TODO: SESEvent & add
  // https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/aws-lambda/trigger/ses.d.ts
  SNSEvent &
  SQSEvent;
