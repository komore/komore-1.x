import { type TerraformProviderDetailsBlockJson } from './terraform-provider-details-block-json';

/**
 * Terraform provider schema provider JSON
 *
 * @private
 */
export interface TerraformProviderSchemaProviderJson {
  /**
   * Block
   */
  readonly block: TerraformProviderDetailsBlockJson;
  /**
   * Version
   */
  readonly version: number;
}
