import { SNSEventRecord } from 'aws-lambda';
import { LambdaFunctionType } from '../lambda-function-type';

/**
 * SNS lambda function input
 */
type SnsLambdaFunctionInput = Readonly<{
  records: ReadonlyArray<SNSEventRecord>;
}>;

/**
 * SNS lambda function type
 */
export type SnsLambdaFunctionType = LambdaFunctionType<SnsLambdaFunctionInput, void>;
