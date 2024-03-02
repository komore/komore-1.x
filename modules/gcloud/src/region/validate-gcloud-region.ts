import { gcloudTypeError } from '../gcloud-type.error';
import { type GcloudRegion } from './gcloud-region';
import { isGcloudRegion } from './is-gcloud-region';

/**
 * Validates that a region string is an Google Cloud region
 *
 * @param region Region string
 */
export function validateGcloudRegion(region: string): asserts region is GcloudRegion {
  if (!isGcloudRegion(region)) {
    throw gcloudTypeError.invalidRegion({ region });
  }
}
