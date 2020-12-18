import { APIGatewayProxyHandlerV2, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { DynamoDBLambdaFunctionType } from './function-types/dynamodb-lambda-function-type';
import { KinesisLambdaFunctionType } from './function-types/kinesis-lambda-function-type';
import { S3LambdaFunctionType } from './function-types/s3-lambda-function-type';
import { SesLambdaFunctionType } from './function-types/ses-lambda-function-type';
import { SnsLambdaFunctionType } from './function-types/sns-lambda-function-type';
import { SqsLambdaFunctionType } from './function-types/sqs-lambda-function-type';
import { LambdaEventHandler } from './lambda-event-handler';

/**
 * Lambda function type mapping
 */
export type LambdaFunctionTypeMapping = Readonly<{
  'aws:api-gateway': LambdaEventHandler<APIGatewayProxyEvent, APIGatewayProxyResult>;
  'aws:api-gateway:http': APIGatewayProxyHandlerV2;
  'aws:dynamodb': DynamoDBLambdaFunctionType;
  'aws:kinesis': KinesisLambdaFunctionType;
  'aws:s3': S3LambdaFunctionType;
  'aws:ses': SesLambdaFunctionType;
  'aws:sns': SnsLambdaFunctionType;
  'aws:sqs': SqsLambdaFunctionType;
}>;

/**
 * Lambda types
 */
export type LambdaTypes = LambdaFunctionTypeMapping[keyof LambdaFunctionTypeMapping];
