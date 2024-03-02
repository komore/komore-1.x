import { type LambdaBaseArn } from '../../lambda-base-arn';

/**
 * Lambda function version ARN
 */
export type LambdaFunctionVersionArn = LambdaBaseArn<`function:${string}:${number}`>;
