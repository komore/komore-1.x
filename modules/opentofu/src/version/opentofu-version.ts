/**
 * OpenTofu version
 */
export interface OpenTofuVersion {
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
