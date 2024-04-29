import { type ReadonlyRecord } from '@komore/typescript';

import { type TerraformProviderSchemaJson } from './terraform-provider-schema-json';

/**
 * Terraform provider schemas JSON
 */
export interface TerraformProviderSchemasJson {
  /**
   * Format version
   */
  readonly format_version: '1.0';
  /**
   * Providers
   */
  readonly provider_schemas: ReadonlyRecord<string, TerraformProviderSchemaJson>;
}
