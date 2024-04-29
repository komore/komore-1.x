import { type TerraformProviderSchemaValueType } from '../terraform-provider-schema-value-type';

/**
 * Terraform provider attribute schema JSON
 */
export interface TerraformProviderAttributeSchemaJson {
  readonly description: string;
  readonly description_kind: 'plain';
  readonly optional: boolean;
  readonly type: TerraformProviderSchemaValueType;
}
