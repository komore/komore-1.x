import { type LambdaBaseArn } from '../../lambda-base-arn';

/**
 * Lambda layer version ARN
 */
export type LambdaLayerVersionArn = LambdaBaseArn<`layer:${string}:${number}`>;
