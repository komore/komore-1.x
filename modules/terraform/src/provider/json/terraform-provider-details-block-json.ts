import { type ReadonlyRecord } from '@komore/typescript';

import { type TerraformProviderAttributeSchemaJson } from './terraform-provider-attribute-schema-json';

/**
 * Terraform provider details block JSON
 */
export interface TerraformProviderDetailsBlockJson {
  /**
   * Attributes
   */
  readonly attributes: ReadonlyRecord<string, TerraformProviderAttributeSchemaJson>;
  /**
   * Block types
   */
  readonly block_types: ReadonlyRecord<string, unknown>;
  /**
   * Description kind
   */
  readonly description_kind: 'plain';
}
