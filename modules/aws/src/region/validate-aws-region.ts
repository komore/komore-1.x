import { awsTypeError } from '../aws-type.error';
import { type AwsRegion } from './aws-region';
import { isAwsRegion } from './is-aws-region';

/**
 * Validates that a region string is an AWS region
 *
 * @param region Region string
 */
export function validateAwsRegion(region: string): asserts region is AwsRegion {
  if (!isAwsRegion(region)) {
    throw awsTypeError.invalidRegion({ region });
  }
}
