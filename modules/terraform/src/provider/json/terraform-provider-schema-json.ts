import { type ReadonlyRecord } from '@komore/typescript';

import { type TerraformProviderSchemaProviderJson } from './terraform-provider-schema-provider-json';

/**
 * Terraform provider schema JSON
 */
export interface TerraformProviderSchemaJson {
  /**
   * Provider details
   */
  readonly provider: TerraformProviderSchemaProviderJson;
  /**
   * Resource schemas
   */
  readonly resource_schemas: ReadonlyRecord<string, unknown>;
}
