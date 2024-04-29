import { objectToEntries } from '@komore/functional';

import { type TerraformProviderSchema } from '../terraform-provider-schema';
import { type TerraformProviderSchemasJson } from './terraform-provider-schemas-json';

/**
 * Returns Terraform provider schemas, given Terraform provider schemas JSON
 *
 * @param json Terraform provider schemas JSON
 * @returns Terraform provider schemas
 * @private
 */
export function terraformProviderSchemasJsonToTerraformProviderSchemas(
  json: TerraformProviderSchemasJson
): ReadonlyArray<TerraformProviderSchema> {
  const { format_version: _formatVersion, provider_schemas: providerSchemasJson } = json;
  return objectToEntries(providerSchemasJson).map(([uri, schemaJson]) => {
    const { version } = schemaJson.provider;
    const attributes = objectToEntries(schemaJson.provider.block.attributes).map(
      ([name, { description, optional, type }]) => {
        return {
          description,
          name,
          optional,
          type,
        };
      }
    );
    console.log(schemaJson.provider.block);
    return {
      attributes,
      uri,
      version,
    };
  });
}
