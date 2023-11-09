import { type adyenApiVersions } from './adyen-api-versions';

/**
 * Adyen API version
 */
export type AdyenApiVersion = (typeof adyenApiVersions)[number];
