import { DynamoDBRecord } from 'aws-lambda';
import { LambdaFunctionType } from '../lambda-function-type';

/**
 * DynamoDB lambda function input
 */
type DynamoDBLambdaFunctionInput = Readonly<{
  records: ReadonlyArray<DynamoDBRecord>;
}>;
  
/**
 * DynamoDB lambda function type
 */
export type DynamoDBLambdaFunctionType = LambdaFunctionType<DynamoDBLambdaFunctionInput, void>;
