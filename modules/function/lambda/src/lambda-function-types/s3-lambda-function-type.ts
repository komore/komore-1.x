import { S3EventRecord } from 'aws-lambda';
import { LambdaFunctionType } from '../lambda-function-type';

/**
 * S3 lambda function input
 */
type S3LambdaFunctionInput = Readonly<{
  records: ReadonlyArray<S3EventRecord>;
}>;
  
/**
 * S3 lambda function type
 */
export type S3LambdaFunctionType = LambdaFunctionType<S3LambdaFunctionInput, void>;
