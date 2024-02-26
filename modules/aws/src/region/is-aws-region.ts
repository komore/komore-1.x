import { type AwsRegion } from './aws-region';
import { awsRegions } from './aws-regions';

/**
 * Tests whether a region string is a valid AWS region
 *
 * @param region Region string
 * @returns true if the string is a valid AWS region
 */
export function isAwsRegion(region: string): region is AwsRegion {
  return regions.has(region);
}

const regions: ReadonlySet<string> = new Set(awsRegions);
