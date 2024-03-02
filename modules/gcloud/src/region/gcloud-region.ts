import { type gcloudRegions } from './gcloud-regions';

/**
 * Google Cloud region
 */
export type GcloudRegion = (typeof gcloudRegions)[number];
