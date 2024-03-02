import { type GcloudRegion } from './gcloud-region';
import { gcloudRegions } from './gcloud-regions';

/**
 * Tests whether a region string is a valid Google Cloud region
 *
 * @param region Region string
 * @returns true if the string is a valid Google Cloud region
 */
export function isGcloudRegion(region: string): region is GcloudRegion {
  return regions.has(region);
}

const regions: ReadonlySet<string> = new Set(gcloudRegions);
