import { type TerraformProviderSchemaContainerType } from './terraform-provider-schema-container-type';
import { type TerraformProviderSchemaScalarType } from './terraform-provider-schema-scalar-type';

/**
 * Terraform provider schema value type
 */
export type TerraformProviderSchemaValueType =
  | TerraformProviderSchemaScalarType
  | TerraformProviderSchemaScalarType
  | readonly [containerType: TerraformProviderSchemaContainerType, elementType: TerraformProviderSchemaValueType];
