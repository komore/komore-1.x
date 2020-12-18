import { s3MessageType } from "./lambda";

/**
 * Lambda provider types
 */
export interface LambdaProviderTypes {
  'aws:api-gateway': LambdaEventHandler<APIGatewayProxyEvent, APIGatewayProxyResult>;
  'aws:api-gateway:authorizer:request': LambdaEventHandler<
    APIGatewayRequestAuthorizerEvent,
    APIGatewayAuthorizerResult
  >;
  'aws:api-gateway:authorizer:token': APIGatewayTokenAuthorizerHandler;
  'aws:api-gateway:http': APIGatewayProxyHandlerV2;
  'aws:dynamodb': LambdaEventHandler<DynamoDBStreamEvent, void>;
  'aws:kinesis': LambdaEventHandler<KinesisStreamEvent, void>;
  'aws:s3': LambdaEventHandler<S3Event, void>;
  'aws:ses': any; // TODO: type
  'aws:sns': LambdaEventHandler<SNSEvent, void>;
  'aws:sqs': LambdaEventHandler<SQSEvent, void>;
}


/**
 * Lambda provider types
 */
export interface LambdaProviderTypes {
  [s3MessageType]
}
