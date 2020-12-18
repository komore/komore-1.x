import { KinesisStreamRecord } from 'aws-lambda';
import { LambdaFunctionType } from '../lambda-function-type';

/**
 * Kinesis lambda function input
 */
type KinesisLambdaFunctionInput = Readonly<{
  records: ReadonlyArray<KinesisStreamRecord>;
}>;
  
/**
 * Kinesis lambda function type
 */
export type KinesisLambdaFunctionType = LambdaFunctionType<KinesisLambdaFunctionInput, void>;
