import { type awsRegions } from './aws-regions';

/**
 * AWS region
 */
export type AwsRegion = (typeof awsRegions)[number];
