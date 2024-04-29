import { type ReadonlyRecord } from '@komore/typescript';

/**
 * Terraform version
 */
export interface TerraformVersion {
  /**
   * Whether the version is outdated
   */
  readonly outdated: boolean;
  /**
   * Terraform platform
   */
  readonly platform: string;
  /**
   * Terraform provider versions
   */
  readonly providers: ReadonlyRecord<string, string>;
  /**
   * Terraform version
   */
  readonly version: string;
}
