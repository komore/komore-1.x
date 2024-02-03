/**
 * Adyen API client API versions
 */
export interface AdyenApiClientApiVersions {
  readonly checkout: (typeof adyenApiCheckoutApiVersions)[number];
}

export const adyenApiCheckoutApiVersions = ['70'] as const;
