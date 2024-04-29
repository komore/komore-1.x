import { type ReadonlyRecord } from '@komore/typescript';

/**
 * Terraform version JSON
 *
 * @private
 */
export interface TerraformVersionJson {
  /**
   * Platform
   */
  readonly platform: string;
  /**
   * Providers
   */
  readonly provider_selections: ReadonlyRecord<string, string>;
  /**
   * Whether the version is outdated
   */
  readonly terraform_outdated?: boolean;
  /**
   * Terraform version
   */
  readonly terraform_version: string;
}
