import { type LambdaBaseArn } from '../lambda-base-arn';

/**
 * Lambda layer ARN
 */
export type LambdaLayerArn = LambdaBaseArn<`layer:${string}`>;
