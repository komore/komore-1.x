import {
  APIGatewayProxyEvent,
  APIGatewayProxyEventV2,
  APIGatewayRequestAuthorizerEvent,
  APIGatewayTokenAuthorizerEvent,
  CloudFrontEvent,
  DynamoDBStreamEvent,
  FirehoseTransformationEvent,
  KinesisStreamEvent,
  S3Event,
  SNSEvent,
  SQSEvent
} from 'aws-lambda';

/**
 * Lambda event
 */
export type LambdaEvent =
  APIGatewayProxyEvent |
  APIGatewayProxyEventV2 |
  APIGatewayRequestAuthorizerEvent |
  APIGatewayTokenAuthorizerEvent |
  CloudFrontEvent |
  DynamoDBStreamEvent |
  KinesisStreamEvent |
  FirehoseTransformationEvent |
  S3Event |
  // TODO: SESEvent |
  SNSEvent |
  SQSEvent
;
