import { type LambdaBaseArn } from '../../lambda-base-arn';

/**
 * Lambda function alias ARN
 */
export type LambdaFunctionAliasArn = LambdaBaseArn<`function:${string}:${string}`>;
