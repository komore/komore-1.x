import { type LambdaBaseArn } from '../lambda-base-arn';

/**
 * Lambda event source mapping ARN
 */
export type LambdaEventSourceMappingArn = LambdaBaseArn<`event-source-mapping:${string}`>;
