/**
 * Adyen client API options
 *
 * @template AllowedVersions Allowed versions
 */
export interface AdyenClientApiOptions<AllowedVersions extends string> {
  /**
   * API endpoint URL
   */
  readonly endpointUrl: URL;
  /**
   * API version
   */
  readonly version: AllowedVersions;
}
