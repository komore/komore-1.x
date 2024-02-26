import { type AwsRegion } from './aws-region';
import { validateAwsRegion } from './validate-aws-region';

/**
 * Safely casts a region string to an AWS region
 *
 * @param region Region string
 * @returns AWS region
 */
export function asAwsRegion(region: string): AwsRegion {
  validateAwsRegion(region);
  return region;
}
