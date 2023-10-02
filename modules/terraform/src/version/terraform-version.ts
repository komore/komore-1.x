/**
 * Terraform version
 */
export interface TerraformVersion {
  /**
   * Whether a new version is available
   */
  readonly isOutdated: boolean;
  /**
   * Terraform platform
   */
  readonly platform: string;
  /**
   * Terraform provider versions
   */
  readonly providers: ReadonlyMap<string, string>;
  /**
   * Terraform version
   */
  readonly version: string;
}
