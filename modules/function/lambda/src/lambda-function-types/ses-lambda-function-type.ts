import { SNSEventRecord } from 'aws-lambda';
import { LambdaFunctionType } from '../lambda-function-type';

/**
 * SES lambda function input
 */
type SesLambdaFunctionInput = Readonly<{
  records: ReadonlyArray<SNSEventRecord>;
}>;

/**
 * SES lambda function type
 */
export type SesLambdaFunctionType = LambdaFunctionType<SesLambdaFunctionInput, void>;
