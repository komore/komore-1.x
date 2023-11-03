/**
 * OpenTofu version
 */
export interface OpenTofuVersion {
  /**
   * Whether a new version is available
   */
  readonly isOutdated: boolean;
  /**
   * OpenTofu platform
   */
  readonly platform: string;
  /**
   * OpenTofu provider versions
   */
  readonly providers: ReadonlyMap<string, string>;
  /**
   * OpenTofu version
   */
  readonly version: string;
}
