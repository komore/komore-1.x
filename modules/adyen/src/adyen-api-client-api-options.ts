import { type AdyenApiClientApiVersions } from './adyen-api-client-api-versions';

/**
 * Adyen API client API options
 *
 * @template AllowedVersions Allowed versions
 */
export interface AdyenApiClientApiOptions<ApiName extends keyof AdyenApiClientApiVersions> {
  /**
   * API endpoint URL
   */
  readonly endpointUrl: URL;
  /**
   * API version
   */
  readonly version: AdyenApiClientApiVersions[ApiName];
}
