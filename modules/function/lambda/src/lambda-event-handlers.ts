import {
  APIGatewayTokenAuthorizerHandler,
  APIGatewayProxyHandlerV2,
  // TODO: SESHandler,
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  APIGatewayRequestAuthorizerEvent,
  APIGatewayAuthorizerResult,
  DynamoDBStreamEvent,
  KinesisStreamEvent,
  S3Event,
  SNSEvent,
  SQSEvent
} from 'aws-lambda';
import { LambdaEventHandler } from './lambda-event-handler';

/**
 * Lambda event handlers
 */
export interface LambdaEventHandlers {
  'aws:api-gateway': LambdaEventHandler<APIGatewayProxyEvent, APIGatewayProxyResult>;
  'aws:api-gateway:authorizer:request': LambdaEventHandler<APIGatewayRequestAuthorizerEvent, APIGatewayAuthorizerResult>;
  'aws:api-gateway:authorizer:token': APIGatewayTokenAuthorizerHandler;
  'aws:api-gateway:http': APIGatewayProxyHandlerV2;
  'aws:dynamodb': LambdaEventHandler<DynamoDBStreamEvent, void>;
  'aws:kinesis': LambdaEventHandler<KinesisStreamEvent, void>;
  'aws:s3': LambdaEventHandler<S3Event, void>;
  'aws:ses': any; // TODO: type
  'aws:sns': LambdaEventHandler<SNSEvent, void>;
  'aws:sqs': LambdaEventHandler<SQSEvent, void>;
}
