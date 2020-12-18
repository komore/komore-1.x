import { LambdaFunctionType } from '../lambda-function-type';
import { SQSRecord } from 'aws-lambda';

/**
 * SQS lambda function input
 */
type SqsLambdaFunctionInput = Readonly<{
  records: ReadonlyArray<SQSRecord>;
}>;

/**
 * SQS lambda function type
 */
export type SqsLambdaFunctionType = LambdaFunctionType<SqsLambdaFunctionInput, void>;
