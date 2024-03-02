import { type GcloudRegion } from './gcloud-region';
import { validateGcloudRegion } from './validate-gcloud-region';

/**
 * Safely casts a region string to an Google Cloud region
 *
 * @param region Region string
 * @returns Google Cloud region
 */
export function asGcloudRegion(region: string): GcloudRegion {
  validateGcloudRegion(region);
  return region;
}
