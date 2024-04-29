import { type TerraformProviderAttributeSchema } from './terraform-provider-attribute-schema';

/**
 * Terraform provider schema
 */
export interface TerraformProviderSchema {
  /**
   * Provider attributes
   */
  readonly attributes: ReadonlyArray<TerraformProviderAttributeSchema>;
  /**
   * Provider URI
   */
  readonly uri: string;
  /**
   * Provider version
   */
  readonly version: number;
}
