import { type LambdaBaseArn } from '../lambda-base-arn';

/**
 * Lambda function ARN
 */
export type LambdaFunctionArn = LambdaBaseArn<`function:${string}`>;
