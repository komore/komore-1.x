import { type TerraformProviderSchemaValueType } from './terraform-provider-schema-value-type';

/**
 * Terraform provider attribute schema
 */
export interface TerraformProviderAttributeSchema {
  /**
   * Description
   */
  readonly description: string;
  /**
   * Attribute name
   */
  readonly name: string;
  /**
   * Whether the attribute is optional
   */
  readonly optional: boolean;
  /**
   * Attribute type
   */
  readonly type: TerraformProviderSchemaValueType;
}
